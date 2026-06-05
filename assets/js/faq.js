// faq.js — FAQ accordion
(function() {
  var container = document.getElementById('faq-container');
  if (!container) return;

  // Accordion logic
  container.addEventListener('click', function(e) {
    var question = e.target.closest('.faq-question');
    if (!question) return;

    var item = question.parentElement;
    var answer = item.querySelector('.faq-answer');
    var isActive = item.classList.contains('active');

    // Close all
    container.querySelectorAll('.faq-item').forEach(function(fi) {
      fi.classList.remove('active');
      fi.querySelector('.faq-answer').style.maxHeight = '0';
    });

    // Open clicked (if it wasn't already open)
    if (!isActive) {
      item.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
})();
