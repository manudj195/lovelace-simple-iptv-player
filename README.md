# Simple IPTV Player

Simple IPTV Player is a custom Lovelace card for Home Assistant that plays IPTV streams directly in your dashboard.

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=manudj195&repository=simple-iptv-player-package&category=lovelace)

## Installation with HACS

1. Open HACS.
2. Add this repository as a custom repository with category **Lovelace**.
3. Install **Simple IPTV Player**.
4. Reload Home Assistant or refresh the browser cache.

## Manual installation

If you do not want to use HACS, copy the files from the `dist/` folder into your Home Assistant `www` folder.

Example path:

```text
config/www/simple-iptv-player/
```

Then add the resource in Home Assistant:

```yaml
url: /local/simple-iptv-player/simple-iptv-player.js
type: module
```

## Configuration

```yaml
type: custom:simple-iptv-player
title: La mia TV
height: 500px
urls:
  - name: La7
    url: https://example.com/la7.m3u8
  - name: Sky TG24
    url: https://example.com/sky.m3u8
```

## Default channels

The bundled default list is included in:

```text
config/www/community/lovelace-simple-iptv-player/urls.json
```

You can edit it directly in the repository if you want to change the defaults.

## Persistent custom channels

If you want user-defined default channels that survive HACS updates, create this file:

```text
config/www/simple-iptv-player-urls.json
```

That file has priority over the bundled one and is never overwritten by HACS updates.

## Files included in the package

- `dist/simple-iptv-player.js`
- `dist/iptv-player.html`
- `dist/urls.json`
- `dist/hls.min.js`
- `dist/dash.all.min.js`

## Notes

- `urls:` in the card config adds extra streams at runtime.
- `simple-iptv-player-urls.json` is the recommended place for permanent local customization.
