/**
 * Progressive UX Dashboard & HUD Control Panel
 * Orchestrates premium interactive widgets, tabs, roadmap nodes, and console views.
 */
(function() {
  document.addEventListener('DOMContentLoaded', () => {
    initAboutTabs();
    initWhyConsole();
    initServicesHUD();
    initProjectsShowcase();
    initExperienceStepper();
    initJourneyStepper();
    initMobileNav();
    initRevealToggles();
  });

  // Generic HUD switcher helper
  function setupHudControls(tabClass, paneClass) {
    const tabs = document.querySelectorAll(tabClass);
    const panes = document.querySelectorAll(paneClass);
    
    if (tabs.length === 0) return;

    tabs.forEach(tab => {
      // Support click & focus events for accessibility
      const activate = () => {
        const targetId = tab.getAttribute('data-target');
        
        tabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        panes.forEach(pane => {
          if (pane.id === targetId) {
            pane.classList.add('active');
            pane.setAttribute('aria-hidden', 'false');
            
            // Trigger animation on children
            const animatedChildren = pane.querySelectorAll('.geom-card, p, li, h3, h4, .roadmap-node, .experience-stepper-pane, .journey-stepper-pane');
            animatedChildren.forEach((child, idx) => {
              child.style.animation = 'none';
              child.offsetHeight; // Trigger reflow
              child.style.animation = `dashFadeIn 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${idx * 40}ms both`;
            });
          } else {
            pane.classList.remove('active');
            pane.setAttribute('aria-hidden', 'true');
          }
        });
      };

      tab.addEventListener('click', activate);
      tab.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activate();
        }
      });
    });
  }

  function initAboutTabs() {
    setupHudControls('.about-tab-btn', '.about-pane');
  }

  function initWhyConsole() {
    setupHudControls('.why-console-btn', '.why-display-pane');
  }

  function initServicesHUD() {
    setupHudControls('.services-hud-cell', '.services-pane');
  }

  function initProjectsShowcase() {
    setupHudControls('.project-menu-btn', '.project-pane');
  }

  function initExperienceStepper() {
    setupHudControls('.experience-step-node', '.experience-stepper-pane');
  }

  function initJourneyStepper() {
    setupHudControls('.journey-step-node', '.journey-stepper-pane');
    
    const nodes = document.querySelectorAll('.journey-step-node');
    const fill = document.querySelector('.journey-progress-fill');
    if (!fill || nodes.length === 0) return;

    const updateProgress = () => {
      let activeIndex = 0;
      nodes.forEach((node, idx) => {
        if (node.classList.contains('active')) {
          activeIndex = idx;
        }
      });
      const pct = (activeIndex / (nodes.length - 1)) * 100;
      fill.style.width = pct + '%';
    };

    nodes.forEach(node => {
      node.addEventListener('click', updateProgress);
      node.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setTimeout(updateProgress, 50);
        }
      });
    });

    updateProgress();
  }

  function initMobileNav() {
    const hamburger = document.getElementById('nav-hamburger');
    const navLinks = document.getElementById('nav-links');
    
    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when clicking link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function initRevealToggles() {
    const toggleButtons = document.querySelectorAll('.rv-toggle-btn');
    toggleButtons.forEach(btn => {
      const targetId = btn.getAttribute('data-target');
      const targetContainer = document.getElementById(targetId);
      if (!targetContainer) return;

      const textMore = btn.getAttribute('data-text-more') || "Show More";
      const textLess = btn.getAttribute('data-text-less') || "Show Less";
      const arrowSpan = btn.querySelector('.arrow') || btn;

      btn.addEventListener('click', () => {
        const isOpen = targetContainer.classList.toggle('open');
        const textSpan = btn.querySelector('.text') || btn;
        
        if (isOpen) {
          if (textSpan !== btn) textSpan.textContent = textLess;
          if (arrowSpan !== btn) arrowSpan.textContent = "↑";
        } else {
          if (textSpan !== btn) textSpan.textContent = textMore;
          if (arrowSpan !== btn) arrowSpan.textContent = "↓";
          
          // Smoothly scroll back to top
          targetContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
})();
