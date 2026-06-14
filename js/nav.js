/* ─────────────────────────────────────────
   nav.js — scroll state + mobile drawer
───────────────────────────────────────── */
window.Nav = (() => {
  const nav     = document.getElementById('mainNav');
  const burger  = document.getElementById('burger');
  const drawer  = document.getElementById('drawer');
  const overlay = document.getElementById('drawerOverlay');

  /* ── Scroll state ── */
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 48);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Drawer ── */
  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    burger.classList.add('active');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    burger.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  function toggleDrawer() {
    drawer.classList.contains('open') ? closeDrawer() : openDrawer();
  }

  /* wire burger */
  burger.addEventListener('click', toggleDrawer);
  overlay.addEventListener('click', closeDrawer);

  /* close button inside drawer */
  document.querySelectorAll('[data-drawer-close]').forEach(btn => {
    btn.addEventListener('click', closeDrawer);
  });

  /* close drawer when a drawer nav link is tapped */
  document.querySelectorAll('[data-drawer-link]').forEach(a => {
    a.addEventListener('click', closeDrawer);
  });

  /* ── Smooth anchor scroll (excludes booking buttons) ── */
  document.querySelectorAll('a[href^="#"]:not([data-book])').forEach(a => {
    a.addEventListener('click', e => {
      const id     = a.getAttribute('href');
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-h')
      ) || 80;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    });
  });

  return { openDrawer, closeDrawer, toggleDrawer };
})();
