// tilt.js — 3D tilt effect on cards
(function() {
  if (window.innerWidth < 1024) return;

  var cards = document.querySelectorAll('.tilt-card');
  cards.forEach(function(card) {
    card.addEventListener('mousemove', function(e) {
      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var centerX = rect.width / 2;
      var centerY = rect.height / 2;
      var rotateX = ((y - centerY) / centerY) * -4;
      var rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = 'perspective(800px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale3d(1.02,1.02,1.02)';
    });

    card.addEventListener('mouseleave', function() {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)';
    });
  });
})();
