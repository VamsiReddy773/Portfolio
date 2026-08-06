// ---------- Topbar shadow/border on scroll ----------
const topbar = document.querySelector('[data-topbar]');
const onScroll = () => {
  topbar.classList.toggle('is-scrolled', window.scrollY > 8);
};
document.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ---------- Mobile nav toggle ----------
const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('is-open');
});
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('is-open'));
});

// ---------- Active nav link on scroll ----------
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('[data-nav-link]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });

sections.forEach(section => sectionObserver.observe(section));

// ---------- Reveal on scroll ----------
const revealTargets = document.querySelectorAll(
  '.about-grid, .timeline-item, .project-card, .skill-group, .contact-card'
);
revealTargets.forEach(el => el.setAttribute('data-reveal', ''));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => revealObserver.observe(el));

// ---------- Back to top ----------
document.querySelector('[data-to-top]').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
