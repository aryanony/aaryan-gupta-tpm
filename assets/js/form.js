// form.js — Contact form handling
(function() {
  var form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var name = form.querySelector('[name="name"]');
    var email = form.querySelector('[name="email"]');
    var message = form.querySelector('[name="message"]');
    var btn = form.querySelector('button[type="submit"]');
    var valid = true;

    // Reset errors
    form.querySelectorAll('.form-error').forEach(function(el) { el.remove(); });
    form.querySelectorAll('.error').forEach(function(el) { el.classList.remove('error'); });

    // Validate
    if (!name.value.trim()) { showError(name, 'Name is required'); valid = false; }
    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { showError(email, 'Valid email is required'); valid = false; }
    if (!message.value.trim()) { showError(message, 'Message is required'); valid = false; }

    if (!valid) return;

    // Simulate submission
    btn.classList.add('sending');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    setTimeout(function() {
      btn.classList.remove('sending');
      btn.textContent = 'Sent!';
      btn.style.background = '#22C55E';

      setTimeout(function() {
        btn.textContent = 'Send Message';
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
      }, 2500);
    }, 1500);
  });

  function showError(input, msg) {
    input.classList.add('error');
    input.style.borderColor = '#FF6B6B';
    var err = document.createElement('span');
    err.className = 'form-error';
    err.style.cssText = 'color:#FF6B6B;font-size:0.75rem;margin-top:-0.5rem;display:block;';
    err.textContent = msg;
    input.parentElement.insertBefore(err, input.nextSibling);
    input.addEventListener('input', function() {
      input.style.borderColor = '';
      input.classList.remove('error');
      if (err.parentElement) err.remove();
    }, { once: true });
  }
})();
