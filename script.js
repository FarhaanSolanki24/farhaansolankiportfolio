// Mobile sidebar toggle
const navToggle = document.getElementById('navToggle');
const sidebar = document.getElementById('sidebar');

if (navToggle && sidebar) {
  navToggle.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close sidebar after tapping a nav link on mobile
  sidebar.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Scroll-spy: highlight the nav link for the section in view
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const setActive = (id) => {
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.dataset.section === id);
  });
};

if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}
