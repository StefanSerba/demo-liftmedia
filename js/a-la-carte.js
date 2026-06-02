// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.faq-question').addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Card-1 video controls
const vid1 = document.getElementById('vid-1');
const playBtn1 = document.getElementById('play-1');
const muteBtn1 = document.getElementById('mute-1');

playBtn1.addEventListener('click', () => {
  if (vid1.paused) {
    vid1.play();
    playBtn1.innerHTML = '<svg viewBox="0 0 12 14"><rect x="1" y="1" width="4" height="12" fill="white"/><rect x="7" y="1" width="4" height="12" fill="white"/></svg>';
  } else {
    vid1.pause();
    playBtn1.innerHTML = '<svg viewBox="0 0 12 14"><polygon points="2,1 11,7 2,13" fill="white"/></svg>';
  }
});

muteBtn1.addEventListener('click', e => {
  e.stopPropagation();
  vid1.muted = !vid1.muted;
  muteBtn1.style.borderColor = vid1.muted ? '' : 'var(--gold)';
});

// Card-2 video controls
const vid2 = document.getElementById('vid-2');
const playBtn2 = document.getElementById('play-2');
const muteBtn2 = document.getElementById('mute-2');

playBtn2.addEventListener('click', () => {
  if (vid2.paused) {
    vid2.play();
    playBtn2.innerHTML = '<svg viewBox="0 0 12 14"><rect x="1" y="1" width="4" height="12" fill="white"/><rect x="7" y="1" width="4" height="12" fill="white"/></svg>';
  } else {
    vid2.pause();
    playBtn2.innerHTML = '<svg viewBox="0 0 12 14"><polygon points="2,1 11,7 2,13" fill="white"/></svg>';
  }
});

muteBtn2.addEventListener('click', e => {
  e.stopPropagation();
  vid2.muted = !vid2.muted;
  muteBtn2.style.borderColor = vid2.muted ? '' : 'var(--gold)';
});

// Card-3 video controls
const vid3 = document.getElementById('vid-3');
const playBtn3 = document.getElementById('play-3');
const muteBtn3 = document.getElementById('mute-3');

playBtn3.addEventListener('click', () => {
  if (vid3.paused) {
    vid3.play();
    playBtn3.innerHTML = '<svg viewBox="0 0 12 14"><rect x="1" y="1" width="4" height="12" fill="white"/><rect x="7" y="1" width="4" height="12" fill="white"/></svg>';
  } else {
    vid3.pause();
    playBtn3.innerHTML = '<svg viewBox="0 0 12 14"><polygon points="2,1 11,7 2,13" fill="white"/></svg>';
  }
});

muteBtn3.addEventListener('click', e => {
  e.stopPropagation();
  vid3.muted = !vid3.muted;
  muteBtn3.style.borderColor = vid3.muted ? '' : 'var(--gold)';
});

// Scroll reveals
const cards = document.querySelectorAll('.service-card, .step, .faq-item');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; io.unobserve(e.target); }
  });
}, { threshold: 0.08 });
cards.forEach((el, i) => {
  el.style.opacity = '0'; el.style.transform = 'translateY(18px)';
  el.style.transition = `opacity 0.5s ease ${(i % 3) * 0.07}s, transform 0.5s ease ${(i % 3) * 0.07}s`;
  io.observe(el);
});
