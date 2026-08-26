document.addEventListener('DOMContentLoaded', () => {
  const htmlElement = document.documentElement;
  const themeToggleBtn = document.getElementById('sinalSwimThemeToggle');
  const mobileMenuBtn = document.getElementById('sinalSwimMobileBtn');
  const navMenu = document.getElementById('sinalSwimNavMenu');
  const navLinks = document.querySelectorAll('.sinalSwim-nav-link');

//   Theme
  const savedTheme = localStorage.getItem('sinalswim_theme') || 'dark';
  htmlElement.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const nextTheme = htmlElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      htmlElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('sinalswim_theme', nextTheme);
    });
  }

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('sinalSwim-menu-open');
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('sinalSwim-menu-open');
      });
    });
  }

  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
        });
      }
    });
  });
});