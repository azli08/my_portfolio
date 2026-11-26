// Language selection
const languageButton = document.querySelector('.language-toggle');
const translatableElements = document.querySelectorAll('[data-tr][data-en]');

function setLanguage(language) {
  document.documentElement.lang = language;

  document.title = language === 'tr'
    ? 'Aslı Alparslan — Yazılım Mühendisi'
    : 'Aslı Alparslan — Software Engineer';

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.content = language === 'tr'
      ? "Yazılım mühendisi Aslı Alparslan'ın portfolyosu."
      : 'Portfolio of Aslı Alparslan, software engineer.';
  }

  const navigation = document.querySelector('nav');
  if (navigation) {
    navigation.setAttribute(
      'aria-label',
      language === 'tr' ? 'Ana menü' : 'Main navigation',
    );
  }

  translatableElements.forEach((element) => {
    element.innerHTML = element.dataset[language];
  });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  if (languageButton) {
    languageButton.textContent = language === 'tr' ? 'EN' : 'TR';
    languageButton.setAttribute(
      'aria-label',
      language === 'tr' ? 'Switch language to English' : 'Dili Türkçe yap',
    );
  }

  // Keep the selected language on this device for the next visit.
  try {
    localStorage.setItem('portfolio-language', language);
  } catch {
    // Storage can be unavailable when the page is opened directly as a file.
  }
}

function getSavedLanguage() {
  try {
    const savedLanguage = localStorage.getItem('portfolio-language');
    return savedLanguage === 'en' ? 'en' : 'tr';
  } catch {
    return 'tr';
  }
}

setLanguage(getSavedLanguage());

languageButton?.addEventListener('click', () => {
  const nextLanguage = document.documentElement.lang === 'tr' ? 'en' : 'tr';
  setLanguage(nextLanguage);
});

// Scroll animations and decorative movement
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)',
).matches;

if (!prefersReducedMotion) {
  document.body.classList.add('has-motion');

  const animatedElements = document.querySelectorAll(
    '.hero-copy > *, .hero-art, .hero-foot, .about-grid > *, ' +
      '.section-heading > *, .project-card, .contact-inner > *, .footer > *',
  );

  animatedElements.forEach((element, index) => {
    element.classList.add('reveal');
    element.style.setProperty('--reveal-delay', `${(index % 4) * 130}ms`);

    const entersFromRight = element.matches(
      '.hero-art, .about-grid > :nth-child(2), ' +
        '.section-heading > :last-child, .project-card:nth-child(even)',
    );
    if (entersFromRight) element.classList.add('reveal-from-right');
    if (element.matches('.project-card')) element.classList.add('reveal-card');
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -45px 0px',
  });

  animatedElements.forEach((element) => revealObserver.observe(element));

  const heroArtwork = document.querySelector('.hero-art');
  const projectVisuals = [...document.querySelectorAll('.project-visual')];
  let animationFramePending = false;

  function updateScrollMotion() {
    if (heroArtwork) {
      const bounds = heroArtwork.getBoundingClientRect();
      const centerOffset = bounds.top + bounds.height / 2 - window.innerHeight / 2;
      const shift = Math.max(-70, Math.min(70, centerOffset * -0.15));
      heroArtwork.style.setProperty('--parallax-shift', `${shift}px`);
    }

    projectVisuals.forEach((visual, index) => {
      const bounds = visual.getBoundingClientRect();
      const progress = (window.innerHeight - bounds.top)
        / (window.innerHeight + bounds.height);
      const direction = index % 2 ? 1 : -1;
      const shift = (progress - 0.5) * direction * 60;
      const tilt = (progress - 0.5) * direction * 3;

      visual.style.setProperty('--visual-shift', `${shift.toFixed(1)}px`);
      visual.style.setProperty('--visual-tilt', `${tilt.toFixed(2)}deg`);
    });

    const scrollTurn = Math.min(window.scrollY * 0.035, 30);
    document.documentElement.style.setProperty('--scroll-turn', `${scrollTurn}deg`);
    animationFramePending = false;
  }

  function requestScrollMotionUpdate() {
    if (animationFramePending) return;

    window.requestAnimationFrame(updateScrollMotion);
    animationFramePending = true;
  }

  window.addEventListener('scroll', requestScrollMotionUpdate, { passive: true });
  window.addEventListener('resize', requestScrollMotionUpdate, { passive: true });
  updateScrollMotion();
}
