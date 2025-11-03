// Detecta scroll e adiciona/remove a classe "scrolled" no <header>
(function () {
  const header = document.querySelector('header');
  if (!header) return;

  // threshold em pixels para considerar que "moveu" (mude se quiser)
  const THRESHOLD = 10;
  let lastKnownScrollY = window.scrollY;
  let ticking = false;

  function updateHeader() {
    header.classList.toggle('scrolled', lastKnownScrollY > THRESHOLD);
    ticking = false;
  }

  function onScroll() {
    lastKnownScrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  // aplica estado inicial (útil quando a página é recarregada não no topo)
  window.addEventListener('load', () => {
    lastKnownScrollY = window.scrollY;
    header.classList.toggle('scrolled', lastKnownScrollY > THRESHOLD);
  });
})();