// magnetic.js — Magnetic pull effect on buttons
(function() {
  if (window.innerWidth < 1024) return;

  var magnetics = document.querySelectorAll('.magnetic');
  magnetics.forEach(function(el) {
    el.addEventListener('mousemove', function(e) {
      var rect = el.getBoundingClientRect();
      var x = e.clientX - rect.left - rect.width / 2;
      var y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = 'translate(' + (x * 0.15) + 'px, ' + (y * 0.15) + 'px)';
    });

    el.addEventListener('mouseleave', function() {
      el.style.transform = 'translate(0, 0)';
      el.style.transition = 'transform 0.3s ease';
    });

    el.addEventListener('mouseenter', function() {
      el.style.transition = 'none';
    });
  });
})();
