// cursor.js — Zero-lag precision pointer with trailing elastic frame
(function() {
  if (window.innerWidth < 1024) return;

  var cx = document.querySelector('.cx');
  var ci = document.querySelector('.ci');
  if (!cx || !ci) return;

  document.body.style.cursor = 'none';

  var mouseX = 0, mouseY = 0;
  var cxX = 0, cxY = 0;

  // Set initial position out of view to avoid flash
  cx.style.left = '-100px';
  cx.style.top = '-100px';
  ci.style.left = '-100px';
  ci.style.top = '-100px';

  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Position active pointer TIP instantly for 100% zero-lag clicking accuracy!
    ci.style.left = mouseX + 'px';
    ci.style.top = mouseY + 'px';
  });

  function animate() {
    // Elastic follow for the outer diamond frame
    cxX += (mouseX - cxX) * 0.16;
    cxY += (mouseY - cxY) * 0.16;
    cx.style.left = cxX + 'px';
    cx.style.top = cxY + 'px';

    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);

  // Hover effects
  var hoverTargets = document.querySelectorAll('a, button, .tilt-card, .magnetic, .btn, .chip, .nav-logo, input, textarea, select, .about-tab-btn, .services-hud-cell, .journey-step-node');
  hoverTargets.forEach(function(el) {
    el.style.cursor = 'none';
    el.addEventListener('mouseenter', function() { cx.classList.add('hover'); });
    el.addEventListener('mouseleave', function() { cx.classList.remove('hover'); });
  });

  // Hide when mouse leaves window
  document.addEventListener('mouseleave', function() {
    cx.style.opacity = '0';
    ci.style.opacity = '0';
  });
  document.addEventListener('mouseenter', function() {
    cx.style.opacity = '1';
    ci.style.opacity = '1';
  });
})();
