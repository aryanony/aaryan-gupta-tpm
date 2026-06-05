// marquee.js — Infinite scrolling marquee
(function() {
  var marquee = document.querySelector('.marquee');
  if (!marquee) return;

  // Clone content for seamless loop
  var contents = marquee.querySelectorAll('.marquee-content');
  if (contents.length < 2) {
    var clone = contents[0].cloneNode(true);
    marquee.appendChild(clone);
  }
})();
