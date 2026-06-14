/* ─────────────────────────────────────────
   booking.js — scroll to #booking section
   on any [data-book] click
───────────────────────────────────────── */
window.Booking = (() => {
  function scrollToBooking(e) {
    if (e) e.preventDefault();
    const target = document.getElementById('booking');
    if (!target) return;
    const offset = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-h')
    ) || 80;
    window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
  }

  document.querySelectorAll('[data-book]').forEach(el => {
    el.addEventListener('click', scrollToBooking);
  });

  return { scrollToBooking };
})();
