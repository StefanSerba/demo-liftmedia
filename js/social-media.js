const reveals = document.querySelectorAll('.client-card, .benefit, .principle, .pricing-card, .step, .workflow-week');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; io.unobserve(e.target); }
  });
}, { threshold: 0.08 });
reveals.forEach((el, i) => {
  el.style.opacity = '0'; el.style.transform = 'translateY(16px)';
  el.style.transition = `opacity 0.5s ease ${(i % 4) * 0.07}s, transform 0.5s ease ${(i % 4) * 0.07}s`;
  io.observe(el);
});
