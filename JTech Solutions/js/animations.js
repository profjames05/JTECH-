document.addEventListener('DOMContentLoaded', () => {
  const animatedBlocks = document.querySelectorAll('.reveal');
  if (!animatedBlocks.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    animatedBlocks.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.15 });

  animatedBlocks.forEach((element) => observer.observe(element));
});
