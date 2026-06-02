// Nav scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
});

// Counter animation
function animateCount(el, end, suffix, duration = 2000) {
  let startTime = null;
  const step = (time) => {
    if (!startTime) startTime = time;
    const progress = Math.min((time - startTime) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 4);
    el.textContent = Math.floor(ease * end) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

let counted = false;
const statsEl = document.querySelector('.stats');
new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting && !counted) {
    counted = true;
    animateCount(document.getElementById('stat1'), 5000, '+');
    animateCount(document.getElementById('stat2'), 50, 'M+');
    animateCount(document.getElementById('stat3'), 150, '+');
  }
}, { threshold: 0.3 }).observe(statsEl);

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
const reveals = document.querySelectorAll('.service-card, .testimonial, .bl-feat, .stat-item');
const revealIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      revealIO.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

reveals.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = `opacity 0.55s ease ${(i % 4) * 0.08}s, transform 0.55s ease ${(i % 4) * 0.08}s`;
  revealIO.observe(el);
});
