// scroll.js — Smooth scroll + sticky nav + active link highlighting
(function() {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Sticky nav background on scroll
  var nav = document.querySelector('.nav-header');
  if (!nav) return;

  var navLinks = document.querySelectorAll('.nav-links a');
  var sections = [];
  navLinks.forEach(function(link) {
    var href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      var sec = document.querySelector(href);
      if (sec) sections.push({ el: sec, link: link });
    }
  });

  function onScroll() {
    // Scrolled class
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Active section highlighting
    var scrollPos = window.scrollY + 200;
    sections.forEach(function(item) {
      var top = item.el.offsetTop;
      var bottom = top + item.el.offsetHeight;
      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach(function(l) { l.classList.remove('active'); });
        item.link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
