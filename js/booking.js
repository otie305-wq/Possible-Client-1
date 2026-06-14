/* ─────────────────────────────────────────
   booking.js — modal open / close
───────────────────────────────────────── */
window.Booking = (() => {
  const modal = document.getElementById('bookingModal');

  function open(e) {
    if (e) e.preventDefault();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  /* close on overlay (backdrop) click */
  modal.addEventListener('click', e => {
    if (e.target === modal) close();
  });

  /* close button inside modal */
  const closeBtn = document.getElementById('bookingClose');
  if (closeBtn) closeBtn.addEventListener('click', close);

  /* close on Escape key */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('active')) close();
  });

  /* wire all [data-book] triggers */
  document.querySelectorAll('[data-book]').forEach(el => {
    el.addEventListener('click', open);
  });

  return { open, close };
})();
