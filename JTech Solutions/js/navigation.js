document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.mobile-toggle');
  const navPanel = document.querySelector('.nav-panel');

  if (!menuToggle || !navPanel) return;

  const closeMenu = () => {
    document.body.dataset.menuOpen = 'false';
    menuToggle.setAttribute('aria-expanded', 'false');
  };

  const openMenu = () => {
    document.body.dataset.menuOpen = 'true';
    menuToggle.setAttribute('aria-expanded', 'true');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = document.body.dataset.menuOpen === 'true';
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navPanel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });
});
