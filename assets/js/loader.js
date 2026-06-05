// loader.js — Full-page loader with progress animation
(function() {
  var loader = document.getElementById('ldr');
  if (!loader) return;

  var progress = loader.querySelector('.loader-progress');
  var step = 0;

  // Simulate progress
  var interval = setInterval(function() {
    step += Math.random() * 15 + 5;
    if (step > 90) step = 90;
    if (progress) progress.style.width = step + '%';
  }, 200);

  function hideLoader() {
    clearInterval(interval);
    if (progress) progress.style.width = '100%';
    setTimeout(function() {
      loader.classList.add('hidden');
      document.body.classList.remove('loading');
    }, 400);
  }

  // Hide after load or after 3s max
  if (document.readyState === 'complete') {
    setTimeout(hideLoader, 800);
  } else {
    window.addEventListener('load', function() {
      setTimeout(hideLoader, 800);
    });
  }
  setTimeout(hideLoader, 3000);
})();
