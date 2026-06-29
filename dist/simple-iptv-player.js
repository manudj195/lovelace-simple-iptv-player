const BASE_URL = new URL('.', import.meta.url).href;

class SimpleIptvPlayer extends HTMLElement {
  setConfig(config) {
    this.config = config || {};
  }

  async connectedCallback() {
    const title = this.config.title || 'Simple IPTV Player';
    const height = this.config.height || '480px';
    const extra = Array.isArray(this.config.urls) ? this.config.urls : [];

    let defaultChannels = [];
    try {
      const customRes = await fetch('/local/simple-iptv-player-urls.json');
      if (customRes.ok) defaultChannels = await customRes.json();
    } catch (e) {}

    if (!Array.isArray(defaultChannels) || defaultChannels.length === 0) {
      try {
        const bundledRes = await fetch(`${BASE_URL}urls.json`);
        if (bundledRes.ok) defaultChannels = await bundledRes.json();
      } catch (e) {}
    }

    const merged = [...(Array.isArray(defaultChannels) ? defaultChannels : []), ...extra];
    const src = `${BASE_URL}iptv-player.html?channels=${encodeURIComponent(JSON.stringify(merged))}`;

    this.innerHTML = `
      <ha-card header="${title}">
        <iframe
          src="${src}"
          style="width:100%; height:${height}; border:none; display:block;"
          allow="autoplay; fullscreen"
        ></iframe>
      </ha-card>
    `;
  }

  getCardSize() { return 6; }
}

customElements.define('simple-iptv-player', SimpleIptvPlayer);

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'simple-iptv-player',
  name: 'Simple IPTV Player',
  description: 'Simple IPTV player for Home Assistant',
  preview: false,
});
