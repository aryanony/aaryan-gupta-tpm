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

  // Custom Select Dropdown Controller
  function initCustomSelects() {
    var wrappers = document.querySelectorAll('.custom-select-wrapper');
    wrappers.forEach(function(wrapper) {
      var trigger = wrapper.querySelector('.custom-select-trigger');
      var optionsList = wrapper.querySelector('.custom-select-options');
      var options = wrapper.querySelectorAll('.custom-option');
      var realSelect = wrapper.querySelector('select');
      var valueSpan = wrapper.querySelector('.custom-select-value');

      if (!trigger || !optionsList || !realSelect) return;

      // Toggle dropdown open/close
      trigger.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // Close other open dropdowns first
        document.querySelectorAll('.custom-select-trigger').forEach(function(t) {
          if (t !== trigger) t.classList.remove('active');
        });
        document.querySelectorAll('.custom-select-options').forEach(function(o) {
          if (o !== optionsList) o.classList.remove('open');
        });

        trigger.classList.toggle('active');
        optionsList.classList.toggle('open');
      });

      // Keyboard support
      trigger.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          trigger.click();
        }
      });

      // Handle Option Selection
      options.forEach(function(option) {
        option.addEventListener('click', function(e) {
          e.stopPropagation();
          var val = option.getAttribute('data-value');
          var html = option.innerHTML;

          valueSpan.innerHTML = html;
          realSelect.value = val;
          realSelect.dispatchEvent(new Event('change'));

          options.forEach(function(opt) { opt.classList.remove('selected'); });
          option.classList.add('selected');

          trigger.classList.remove('active');
          optionsList.classList.remove('open');
        });
      });
    });

    // Click outside to close dropdowns
    document.addEventListener('click', function() {
      document.querySelectorAll('.custom-select-trigger').forEach(function(t) {
        t.classList.remove('active');
      });
      document.querySelectorAll('.custom-select-options').forEach(function(o) {
        o.classList.remove('open');
      });
    });
  }

  // Wait for DOM load to initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCustomSelects);
  } else {
    initCustomSelects();
  }
})();
