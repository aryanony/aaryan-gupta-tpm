// timeline.js — Experience timeline interaction
(function() {
  var list = document.getElementById('timeline-list');
  var detail = document.getElementById('timeline-detail');
  if (!list || !detail) return;

  var items = list.querySelectorAll('.timeline-item');
  var panels = detail.querySelectorAll('.timeline-panel');

  items.forEach(function(item, i) {
    item.addEventListener('click', function() {
      // Update active tab styling
      items.forEach(function(el, idx) {
        el.classList.toggle('active', idx === i);
      });
      
      // Update active panel
      panels.forEach(function(panel, idx) {
        if (idx === i) {
          panel.style.display = 'block';
          // Force reflow
          void panel.offsetWidth;
          panel.classList.add('active');
        } else {
          panel.style.display = 'none';
          panel.classList.remove('active');
        }
      });
    });
  });
})();
