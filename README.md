# Simple IPTV Player

A simple Lovelace card for Home Assistant that plays IPTV streams directly in your dashboard.

## Installation via HACS

1. Add this repository in HACS as a custom Lovelace repository.
2. Install **Simple IPTV Player**.
3. Reload the browser.

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

The packaged default list is stored in:

`config/www/community/lovelace-simple-iptv-player/urls.json`

You can edit it directly to change the bundled default channels.

If you want persistent custom channels that survive HACS updates, create:

`config/www/simple-iptv-player-urls.json`

That file has priority over the bundled one and will not be overwritten by HACS updates.
