/* Paul Lauren Designs — progressive enhancement. The site is fully usable
   without this file; it adds motion, the menu, filters and the lightbox. */
(function () {
  "use strict";
  var doc = document.documentElement;
  doc.classList.add("js");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Header: solidify after scrolling, hide on fast downward scroll */
  var header = document.querySelector(".site-header");
  var lastY = window.scrollY;
  function onScroll() {
    var y = window.scrollY;
    if (!header) return;
    header.classList.toggle("is-scrolled", y > 40);
    var menuOpen = doc.classList.contains("menu-open");
    header.classList.toggle("is-hidden", !menuOpen && y > 600 && y > lastY + 4);
    if (y < lastY - 4) header.classList.remove("is-hidden");
    lastY = y;
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  var toggle = document.querySelector(".menu-toggle");
  var menu = document.getElementById("site-menu");
  function setMenu(open) {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.querySelector(".menu-toggle__label").textContent = open ? "Close" : "Menu";
    doc.classList.toggle("menu-open", open);
    if (open) {
      menu.hidden = false;
      requestAnimationFrame(function () { menu.classList.add("is-open"); });
      var first = menu.querySelector("a");
      if (first) first.focus();
    } else {
      menu.classList.remove("is-open");
      setTimeout(function () { if (!doc.classList.contains("menu-open")) menu.hidden = true; }, 400);
    }
  }
  if (toggle) toggle.addEventListener("click", function () { setMenu(toggle.getAttribute("aria-expanded") !== "true"); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && doc.classList.contains("menu-open")) { setMenu(false); toggle.focus(); } });

  /* Reveal on scroll */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-in"); io.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* Hero film: portrait cut on portrait screens, pause control, pause off-screen */
  var video = document.querySelector(".hero__video");
  if (video) {
    var portrait = window.matchMedia("(max-aspect-ratio: 4/5)").matches;
    if (portrait && video.dataset.srcPortrait) {
      var mp4 = video.querySelector('source[type="video/mp4"]');
      var webm = video.querySelector('source[type="video/webm"]');
      if (mp4) mp4.src = video.dataset.srcPortrait;
      if (webm && video.dataset.webmPortrait) webm.src = video.dataset.webmPortrait;
      if (video.dataset.posterPortrait) video.poster = video.dataset.posterPortrait;
      video.load();
    }
    var btn = document.querySelector(".hero__toggle");
    var userPaused = reduceMotion;
    function play() { var p = video.play(); if (p && p.catch) p.catch(function () {}); }
    function sync() {
      if (!btn) return;
      btn.setAttribute("aria-pressed", String(video.paused));
      btn.setAttribute("aria-label", video.paused ? "Play background film" : "Pause background film");
      btn.querySelector("span").textContent = video.paused ? "Play" : "Pause";
    }
    if (reduceMotion) { video.removeAttribute("autoplay"); video.pause(); }
    if (btn) btn.addEventListener("click", function () {
      if (video.paused) { userPaused = false; play(); } else { userPaused = true; video.pause(); }
    });
    video.addEventListener("play", sync);
    video.addEventListener("pause", sync);
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !userPaused) play(); else if (!entry.isIntersecting) video.pause();
        });
      }).observe(video);
    }
    sync();
  }

  /* Portfolio filters (re-flow the editorial grid pattern for visible cards) */
  var filters = document.querySelectorAll(".filter");
  var cards = Array.prototype.slice.call(document.querySelectorAll(".portfolio-grid .card"));
  function layoutCards() {
    var n = 0;
    cards.forEach(function (card) {
      card.classList.remove("pos-1", "pos-2", "pos-3", "pos-4");
      if (!card.hidden) { card.classList.add("pos-" + ((n % 4) + 1)); n++; }
    });
  }
  filters.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var f = btn.dataset.filter;
      filters.forEach(function (b) { var on = b === btn; b.classList.toggle("is-active", on); b.setAttribute("aria-pressed", String(on)); });
      cards.forEach(function (card) { card.hidden = f !== "all" && card.dataset.region !== f; });
      layoutCards();
      cards.forEach(function (card) { card.classList.add("is-in"); });
    });
  });
  if (cards.length) layoutCards();

  /* Lightbox for project galleries (original, full-resolution files) */
  var box = document.querySelector(".lightbox");
  var zooms = Array.prototype.slice.call(document.querySelectorAll(".gallery__zoom"));
  if (box && zooms.length) {
    var boxImg = box.querySelector("img");
    var boxCap = box.querySelector("figcaption");
    var current = 0;
    var opener = null;
    function show(i) {
      current = (i + zooms.length) % zooms.length;
      var img = zooms[current].querySelector("img");
      boxImg.src = img.dataset.full || img.currentSrc || img.src;
      boxImg.alt = img.alt;
      boxCap.textContent = (current + 1) + " / " + zooms.length;
    }
    function open(i) {
      opener = document.activeElement;
      show(i);
      box.hidden = false;
      doc.style.overflow = "hidden";
      requestAnimationFrame(function () { box.classList.add("is-open"); });
      box.querySelector(".lightbox__close").focus();
    }
    function close() {
      box.classList.remove("is-open");
      doc.style.overflow = "";
      setTimeout(function () { box.hidden = true; boxImg.removeAttribute("src"); }, 300);
      if (opener) opener.focus();
    }
    zooms.forEach(function (z, i) { z.addEventListener("click", function () { open(i); }); });
    box.querySelector(".lightbox__close").addEventListener("click", close);
    box.querySelector(".lightbox__prev").addEventListener("click", function () { show(current - 1); });
    box.querySelector(".lightbox__next").addEventListener("click", function () { show(current + 1); });
    box.addEventListener("click", function (e) { if (e.target === box) close(); });
    document.addEventListener("keydown", function (e) {
      if (box.hidden) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") show(current + 1);
      else if (e.key === "ArrowLeft") show(current - 1);
      else if (e.key === "Tab") {
        var f = box.querySelectorAll("button");
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    var touchX = null;
    box.addEventListener("touchstart", function (e) { touchX = e.touches[0].clientX; }, { passive: true });
    box.addEventListener("touchend", function (e) {
      if (touchX === null) return;
      var dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
      touchX = null;
    });
  }

  /* Contact form: posts to the configured endpoint, else opens the mail app */
  var form = document.querySelector(".contact-form");
  if (form) {
    var params = new URLSearchParams(location.search);
    if (params.get("project")) {
      form.elements.project.value = params.get("project");
      var msg = form.elements.message;
      if (!msg.value) msg.value = "I'm interested in a project similar to " + params.get("project") + ".\n\n";
    }
    var status = form.querySelector(".form-status");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (form.elements.company_website.value) return;
      var invalid = Array.prototype.filter.call(form.querySelectorAll("[required]"), function (el) { return !el.checkValidity(); });
      form.querySelectorAll(".is-invalid").forEach(function (el) { el.classList.remove("is-invalid"); });
      if (invalid.length) {
        invalid.forEach(function (el) { el.classList.add("is-invalid"); });
        status.textContent = "Please add your name, a valid email and a short note about your project.";
        invalid[0].focus();
        return;
      }
      var data = new FormData(form);
      var endpoint = form.dataset.endpoint;
      if (endpoint) {
        status.textContent = "Sending…";
        fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } })
          .then(function (r) { if (!r.ok) throw new Error(); form.reset(); status.textContent = "Thank you. Your note is on its way, and Lauren will be in touch soon."; })
          .catch(function () { status.textContent = "Something went wrong. Please email " + form.dataset.email + " directly."; });
      } else {
        var lines = [];
        data.forEach(function (v, k) { if (v && k !== "company_website") lines.push(k.charAt(0).toUpperCase() + k.slice(1) + ": " + v); });
        location.href = "mailto:" + form.dataset.email + "?subject=" + encodeURIComponent("Project inquiry — " + (data.get("name") || "")) + "&body=" + encodeURIComponent(lines.join("\n"));
        status.textContent = "Opening your email app…";
      }
    });
  }
})();
