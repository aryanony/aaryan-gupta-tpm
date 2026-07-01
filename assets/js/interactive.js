/**
 * Interactive Platform Features
 * ROI Estimator + Tech Stack Builder
 */
document.addEventListener('DOMContentLoaded', () => {
  initTechStackBuilder();
  initRoiEstimator();
});

// ==========================================
// 1. Interactive Tech Stack Builder
// ==========================================
function initTechStackBuilder() {
  const filterBtns = document.querySelectorAll('.stack-filter-btn');
  const badges = document.querySelectorAll('.tool-badge');
  const categoryCards = document.querySelectorAll('.tool-category');
  const resultText = document.getElementById('stack-result-text');

  if (filterBtns.length === 0) return;

  const stackMap = {
    'all': [],
    'web-app': ['VS Code', 'GitHub', 'Vercel', 'Firebase', 'Figma', 'GA4', 'Jira', 'Notion'],
    'ai-bot': ['OpenAI', 'Claude API', 'Botpress', 'n8n', 'Make', 'VS Code', 'Docker'],
    'healthtech': ['Jira', 'Notion', 'Slack', 'GitHub', 'Vercel', 'Firebase', 'Figma', 'Postman'],
    'saas': ['Jira', 'Notion', 'Slack', 'ClickUp', 'GitHub', 'Vercel', 'Firebase', 'Docker', 'Postman', 'GA4']
  };

  const stackResults = {
    'all': 'Viewing all tools across my full operational stack.',
    'web-app': 'Web App Stack → Figma for design, GitHub + Vercel for CI/CD, Firebase for backend, GA4 for analytics.',
    'ai-bot': 'AI Bot Stack → OpenAI/Claude APIs orchestrated through Botpress or n8n, containerized via Docker.',
    'healthtech': 'HealthTech Stack → Agile governance (Jira/Notion), Vercel/Firebase deployment, Figma for clinical UX.',
    'saas': 'SaaS Platform Stack → Full Agile (Jira/ClickUp), Docker for microservices, Firebase/Vercel for infra, GA4 for growth.'
  };

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      const highlightedTools = stackMap[filter] || [];

      if (resultText) {
        resultText.style.opacity = '0';
        setTimeout(() => {
          resultText.innerText = stackResults[filter] || stackResults['all'];
          resultText.style.opacity = '1';
        }, 200);
      }

      if (filter === 'all') {
        badges.forEach(badge => {
          badge.style.opacity = '1';
          badge.style.transition = 'all 0.3s ease';
          badge.classList.remove('tool-badge--active');
        });
        categoryCards.forEach(card => {
          card.style.opacity = '1';
          card.style.transition = 'opacity 0.3s ease';
        });
        return;
      }

      let activeCategories = new Set();

      badges.forEach(badge => {
        badge.style.transition = 'all 0.3s ease';
        const toolName = badge.innerText.trim();
        if (highlightedTools.includes(toolName)) {
          badge.style.opacity = '1';
          badge.classList.add('tool-badge--active');
          activeCategories.add(badge.closest('.tool-category'));
        } else {
          badge.style.opacity = '0.15';
          badge.classList.remove('tool-badge--active');
        }
      });

      categoryCards.forEach(card => {
        card.style.transition = 'opacity 0.3s ease';
        card.style.opacity = activeCategories.has(card) ? '1' : '0.35';
      });
    });
  });
}

// ==========================================
// 2. Interactive ROI / Project Estimator
// ==========================================
function initRoiEstimator() {
  const teamSlider = document.getElementById('roi-team-size');
  const timeSlider = document.getElementById('roi-timeline');
  const outHours = document.getElementById('roi-hours');
  const outRisk = document.getElementById('roi-risk');
  const outValue = document.getElementById('roi-value');

  if (!teamSlider || !timeSlider) return;

  // Style slider track fill
  function updateSliderFill(slider) {
    const pct = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
    slider.style.background = `linear-gradient(to right, var(--neon-primary) ${pct}%, var(--border-subtle) ${pct}%)`;
  }

  function calculateROI() {
    const team = parseInt(teamSlider.value);
    const months = parseInt(timeSlider.value);

    document.getElementById('roi-team-val').innerText = team + (team >= 10 ? '+' : '');
    document.getElementById('roi-time-val').innerText = months + ' mo';

    updateSliderFill(teamSlider);
    updateSliderFill(timeSlider);

    // A TPM saves ~5 hours per dev per week in meetings, blockers, and rework.
    // 4 weeks/month * 5 hours = 20 hours/dev/month.
    const hoursSaved = team * 20 * months;

    // Risk reduction: baseline 20%, scales with team size and timeline
    let riskReduction = Math.min(20 + (team * 2) + (months * 3), 85);

    // Value saved at $50/hr avg dev rate
    const valueSaved = hoursSaved * 50;

    animateValue(outHours, parseInt(outHours.innerText.replace(/,/g, '')) || 0, hoursSaved, 400);
    animateValue(outRisk, parseInt(outRisk.innerText) || 0, riskReduction, 400);
    animateValue(outValue, parseInt(outValue.innerText.replace(/[$,]/g, '')) || 0, valueSaved, 400, true);

    // Update dynamic progress indicators
    const barHours = document.getElementById('roi-bar-hours');
    if (barHours) {
      const hoursPct = Math.min((hoursSaved / 2400) * 100, 100);
      barHours.style.width = hoursPct + '%';
    }

    const barValue = document.getElementById('roi-bar-value');
    if (barValue) {
      const valuePct = Math.min((valueSaved / 120000) * 100, 100);
      barValue.style.width = valuePct + '%';
    }

    const circle = document.getElementById('roi-gauge-circle');
    if (circle) {
      const offset = 213.6 * (1 - riskReduction / 100);
      circle.style.strokeDashoffset = offset;
    }
  }

  teamSlider.addEventListener('input', calculateROI);
  timeSlider.addEventListener('input', calculateROI);

  calculateROI();
}

function animateValue(el, start, end, duration, isCurrency) {
  if (start === end) return;
  let t0 = null;
  const step = ts => {
    if (!t0) t0 = ts;
    const p = Math.min((ts - t0) / duration, 1);
    // easeOutExpo
    const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
    const val = Math.floor(eased * (end - start) + start);
    el.innerHTML = isCurrency ? ('$' + val.toLocaleString()) : val.toLocaleString();
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
