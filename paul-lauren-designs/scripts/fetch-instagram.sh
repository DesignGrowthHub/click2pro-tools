#!/usr/bin/env bash
# Downloads @paullaurendesigns posts (full-resolution images, carousels and
# reels) into assets/instagram/ using instaloader. Instagram serves its
# largest available rendition (typically 1080–1440px wide); nothing is
# re-encoded.
#
#   bash scripts/fetch-instagram.sh                # public profile, anonymous
#   IG_LOGIN=your_username bash scripts/fetch-instagram.sh   # if Instagram asks for login
#
# Afterwards, list the files you want on the site, in order, in
# assets/instagram/selection.txt (one filename per line). Without that file
# the build uses the newest square/portrait images.
set -euo pipefail
cd "$(dirname "$0")/.."

PROFILE="${IG_PROFILE:-paullaurendesigns}"
EXTRA_POSTS=("C8c4BwfSN9d")   # reels / posts referenced in the brief

python3 -m pip install --quiet --upgrade instaloader

LOGIN_ARGS=()
if [[ -n "${IG_LOGIN:-}" ]]; then LOGIN_ARGS=(--login "$IG_LOGIN"); fi

mkdir -p assets/instagram
python3 -m instaloader "${LOGIN_ARGS[@]}" \
  --dirname-pattern="assets/instagram/{target}" \
  --filename-pattern="{date_utc:%Y-%m-%d}_{shortcode}" \
  --no-metadata-json --no-compress-json \
  --fast-update \
  "$PROFILE"

for code in "${EXTRA_POSTS[@]}"; do
  python3 -m instaloader "${LOGIN_ARGS[@]}" \
    --dirname-pattern="assets/instagram/{target}" \
    --filename-pattern="{date_utc:%Y-%m-%d}_{shortcode}" \
    --no-metadata-json \
    -- "-$code" || echo "could not fetch $code"
done

echo "Instagram media saved under assets/instagram/"
