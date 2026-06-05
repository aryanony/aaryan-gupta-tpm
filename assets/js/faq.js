// faq.js — FAQ accordion
(function() {
  var container = document.getElementById('faq-container');
  if (!container) return;

  // If no faq items exist, create them from data
  if (!container.children.length) {
    var faqs = [
      { q: 'Who is Aaryan Gupta?', a: 'Aaryan Gupta is a Technical Project Manager specializing in Health-Tech and SaaS. With an MCA degree and hands-on full-stack development experience, he bridges the gap between engineering teams and business stakeholders to ship software faster.' },
      { q: 'What services does Aaryan Gupta offer?', a: 'Technical Project Management, Health-Tech Consulting, SaaS Project Coordination, AI Automation, Website & Software Maintenance Contracts, and Micro-SaaS product development.' },
      { q: 'How do I hire Aaryan Gupta?', a: 'Book a free 30-minute consultation call through the contact form or Calendly. We will discuss your project requirements, timeline, and engagement model.' },
      { q: 'Does Aaryan Gupta work with doctors and clinics?', a: 'Yes. Aaryan specializes in helping doctors and clinic owners digitize their operations — from EMR selection and vendor coordination to complete clinical workflow automation.' },
      { q: 'What is the pricing model?', a: 'Engagement models include project-based (one-time fee), monthly retainer, and hourly consultation. Maintenance contracts start at ₹8,000/month. All core software products are one-time pricing with no monthly subscription.' }
    ];

    faqs.forEach(function(faq) {
      var item = document.createElement('div');
      item.className = 'faq-item';
      item.innerHTML = '<button class="faq-question">' + faq.q + '</button><div class="faq-answer"><div class="faq-answer-inner">' + faq.a + '</div></div>';
      container.appendChild(item);
    });
  }

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
