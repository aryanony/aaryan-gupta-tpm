// animations.js — IntersectionObserver fade-in on scroll
(function() {
  var targets = document.querySelectorAll('.section:not(.hero), .tilt-card, .why-card, .about-content, .about-image-wrapper, .section-header, .proof-bar, .pain-card, .pricing-card');

  if (!targets.length) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry, i) {
      if (entry.isIntersecting) {
        // Stagger delay for sibling cards
        var delay = 0;
        var parent = entry.target.parentElement;
        if (parent) {
          var siblings = parent.querySelectorAll('.tilt-card, .why-card, .pain-card, .pricing-card');
          siblings.forEach(function(sib, idx) {
            if (sib === entry.target) delay = idx * 100;
          });
        }
        setTimeout(function() {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(function(el) {
    observer.observe(el);
  });
})();
