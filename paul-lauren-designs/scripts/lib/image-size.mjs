// Dependency-free image dimension reader (JPEG incl. EXIF orientation, PNG,
// GIF, WebP, AVIF/HEIC, SVG). Returns the *displayed* size, so a portrait
// photo stored landscape with an EXIF rotation reports portrait dimensions.
import fs from "node:fs";

function jpegSize(buf) {
  let orientation = 1;
  let i = 2;
  while (i + 9 < buf.length) {
    if (buf[i] !== 0xff) {
      i++;
      continue;
    }
    const marker = buf[i + 1];
    if (marker === 0xff) {
      i++;
      continue;
    }
    if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
      i += 2;
      continue;
    }
    const len = buf.readUInt16BE(i + 2);
    // APP1 / Exif orientation
    if (marker === 0xe1 && buf.toString("ascii", i + 4, i + 8) === "Exif") {
      orientation = exifOrientation(buf, i + 10) || orientation;
    }
    const isSOF =
      marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
    if (isSOF) {
      let height = buf.readUInt16BE(i + 5);
      let width = buf.readUInt16BE(i + 7);
      if (orientation >= 5 && orientation <= 8) [width, height] = [height, width];
      return { type: "jpg", width, height, orientation };
    }
    i += 2 + len;
  }
  return null;
}

function exifOrientation(buf, tiff) {
  try {
    const le = buf.toString("ascii", tiff, tiff + 2) === "II";
    const u16 = (o) => (le ? buf.readUInt16LE(o) : buf.readUInt16BE(o));
    const u32 = (o) => (le ? buf.readUInt32LE(o) : buf.readUInt32BE(o));
    const ifd = tiff + u32(tiff + 4);
    const entries = u16(ifd);
    for (let n = 0; n < entries; n++) {
      const e = ifd + 2 + n * 12;
      if (u16(e) === 0x0112) return u16(e + 8);
    }
  } catch {
    /* malformed exif: ignore */
  }
  return 0;
}

function svgSize(text) {
  const tag = (text.match(/<svg[^>]*>/i) || [""])[0];
  const num = (name) => {
    const m = tag.match(new RegExp(`\\s${name}=["']([\\d.]+)(px)?["']`, "i"));
    return m ? Math.round(parseFloat(m[1])) : 0;
  };
  let width = num("width");
  let height = num("height");
  const vb = tag.match(/viewBox=["']([^"']+)["']/i);
  if ((!width || !height) && vb) {
    const [, , w, h] = vb[1].split(/[\s,]+/).map(Number);
    if (w && h) {
      width = width || Math.round(w);
      height = height || Math.round(h);
    }
  }
  return width && height ? { type: "svg", width, height } : { type: "svg", width: 0, height: 0 };
}

export function imageSizeFromBuffer(buf) {
  if (!buf || buf.length < 16) return null;
  if (buf.readUInt32BE(0) === 0x89504e47) {
    return { type: "png", width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }
  if (buf.toString("ascii", 0, 3) === "GIF") {
    return { type: "gif", width: buf.readUInt16LE(6), height: buf.readUInt16LE(8) };
  }
  if (buf[0] === 0xff && buf[1] === 0xd8) return jpegSize(buf);
  if (buf.toString("ascii", 0, 4) === "RIFF" && buf.toString("ascii", 8, 12) === "WEBP") {
    const chunk = buf.toString("ascii", 12, 16);
    if (chunk === "VP8 ") {
      return { type: "webp", width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
    }
    if (chunk === "VP8L") {
      const b = buf.readUInt32LE(21);
      return { type: "webp", width: (b & 0x3fff) + 1, height: ((b >> 14) & 0x3fff) + 1 };
    }
    if (chunk === "VP8X") {
      return { type: "webp", width: 1 + buf.readUIntLE(24, 3), height: 1 + buf.readUIntLE(27, 3) };
    }
  }
  if (buf.toString("ascii", 4, 8) === "ftyp") {
    const ispe = buf.indexOf("ispe");
    if (ispe > 0) {
      return { type: "avif", width: buf.readUInt32BE(ispe + 8), height: buf.readUInt32BE(ispe + 12) };
    }
  }
  const head = buf.toString("utf8", 0, Math.min(buf.length, 8192));
  if (/<svg[\s>]/i.test(head)) return svgSize(head);
  return null;
}

export function imageSize(file) {
  const fd = fs.openSync(file, "r");
  try {
    const { size } = fs.fstatSync(fd);
    // Most headers sit in the first 256 KB; large EXIF/ICC blocks can push
    // the JPEG SOF marker further, so fall back to a full read when needed.
    const first = Buffer.alloc(Math.min(size, 262144));
    fs.readSync(fd, first, 0, first.length, 0);
    const dims = imageSizeFromBuffer(first);
    if (dims && dims.width) return dims;
    if (size > first.length) return imageSizeFromBuffer(fs.readFileSync(file));
    return dims;
  } finally {
    fs.closeSync(fd);
  }
}
