if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(r => console.log('SW registered:', r.scope))
      .catch(e => console.log('SW error:', e));
  });
}
