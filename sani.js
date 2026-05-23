// ===== PAGE NAVIGATION =====
function show(id) {
  // সব page লুকাও
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
  });

  // target page দেখাও
  const target = document.getElementById(id);
  target.classList.add('active');

  // skills page খুললে skill bars animate করো
  if (id === 'skills') {
    setTimeout(() => {
      document.querySelectorAll('.skill-fill').forEach(el => {
        el.style.width = el.dataset.w + '%';
      });
    }, 200);
  } else {
    // অন্য page এ গেলে skill bars reset করো
    document.querySelectorAll('.skill-fill').forEach(el => {
      el.style.width = '0';
    });
  }

  // page এর উপরে scroll করো
  window.scrollTo({ top: 0, behavior: 'smooth' });
}