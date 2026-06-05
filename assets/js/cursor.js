// cursor.js — Custom cursor with hover effects
(function() {
  if (window.innerWidth < 1024) return;

  var cx = document.querySelector('.cx');
  var ci = document.querySelector('.ci');
  if (!cx || !ci) return;

  document.body.style.cursor = 'none';

  var mouseX = 0, mouseY = 0;
  var cxX = 0, cxY = 0;
  var ciX = 0, ciY = 0;

  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    // Smooth follow for outer circle
    cxX += (mouseX - cxX) * 0.12;
    cxY += (mouseY - cxY) * 0.12;
    cx.style.left = cxX + 'px';
    cx.style.top = cxY + 'px';

    // Faster follow for inner dot
    ciX += (mouseX - ciX) * 0.25;
    ciY += (mouseY - ciY) * 0.25;
    ci.style.left = ciX + 'px';
    ci.style.top = ciY + 'px';

    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);

  // Hover effects
  var hoverTargets = document.querySelectorAll('a, button, .tilt-card, .magnetic, .btn, .chip, .nav-logo, input, textarea, select');
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
