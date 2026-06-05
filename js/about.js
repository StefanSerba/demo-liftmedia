// Counter animation
function animateCount(el, end, suffix, duration = 2000) {
  let startTime = null;
  const step = t => {
    if (!startTime) startTime = t;
    const p = Math.min((t - startTime) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 4);
    el.textContent = Math.floor(ease * end) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

let counted = false;
const statsEl = document.querySelector('.stats');
new IntersectionObserver(([e]) => {
  if (e.isIntersecting && !counted) {
    counted = true;
    animateCount(document.getElementById('stat1'), 5000, '+');
    animateCount(document.getElementById('stat2'), 50, 'M+');
    animateCount(document.getElementById('stat3'), 150, '+');
  }
}, { threshold: 0.3 }).observe(statsEl);

// Form submit
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = 'Message Sent ✦';
  btn.style.background = '#2a7a2a';
  btn.style.color = '#fff';
  btn.disabled = true;
}

// Scroll reveals
const reveals = document.querySelectorAll('.value-card, .testimonial, .stat-item');
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
