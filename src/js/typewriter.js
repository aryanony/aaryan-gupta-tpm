// typewriter.js — Cycling typewriter effect
(function() {
  var el = document.getElementById('typewriter');
  if (!el) return;

  var words = ['Health-Tech', 'SaaS Teams', 'Startups', 'Clinics', 'Product Teams'];
  var wordIndex = 0;
  var charIndex = 0;
  var isDeleting = false;
  var typeSpeed = 80;

  function type() {
    var current = words[wordIndex];

    if (isDeleting) {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 40;
    } else {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 80;
    }

    // Add blinking cursor
    el.style.borderRight = '3px solid var(--neon-primary)';

    if (!isDeleting && charIndex === current.length) {
      typeSpeed = 2000; // pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 400;
    }

    setTimeout(type, typeSpeed);
  }

  // Start after a brief delay
  setTimeout(type, 1500);
})();
