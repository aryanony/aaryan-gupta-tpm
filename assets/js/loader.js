// loader.js — Sprint Pipeline Flow Loader (Upward Growth)
(function() {
  var loader = document.getElementById('ldr');
  if (!loader) return;

  loader.innerHTML =
    '<div class="ldr-stage">' +

      '<svg class="ldr-scene" viewBox="0 0 400 300" fill="none">' +
        '<defs>' +
          '<linearGradient id="lg1" x1="0%" y1="100%" x2="100%" y2="0%">' +
            '<stop offset="0%" stop-color="#00E8A8"/>' +
            '<stop offset="50%" stop-color="#00D4FF"/>' +
            '<stop offset="100%" stop-color="#38BDF8"/>' +
          '</linearGradient>' +
          '<filter id="gl" x="-30%" y="-30%" width="160%" height="160%">' +
            '<feGaussianBlur stdDeviation="4" result="b"/>' +
            '<feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>' +
          '</filter>' +
          '<filter id="glass-blur" x="-10%" y="-10%" width="120%" height="120%">' +
            '<feGaussianBlur stdDeviation="2" result="b"/>' +
            '<feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>' +
          '</filter>' +
        '</defs>' +

        // Dot grid
        '<pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">' +
          '<circle cx="10" cy="10" r="0.5" fill="currentColor" class="ldr-dot"/>' +
        '</pattern>' +
        '<rect width="400" height="300" fill="url(#dots)" opacity="0.15"/>' +

        // ═══ Upward growth flow path ═══
        '<path class="ldr-flow-line" d="M30,250 C60,250 70,210 100,200 C130,190 140,180 170,170 C200,160 220,130 260,115 C300,100 320,70 370,55" stroke="url(#lg1)" stroke-width="2.5" stroke-linecap="round" fill="none" filter="url(#gl)"/>' +

        // ═══ Node 1: PLAN — Solid clipboard ═══
        '<g class="ldr-node ldr-n1">' +
          '<rect class="ldr-glass" x="12" y="218" width="52" height="58" rx="10"/>' +
          // Solid clipboard body
          '<rect x="22" y="230" width="32" height="36" rx="4" fill="#00E8A8" opacity="0.2"/>' +
          '<rect x="30" y="224" width="16" height="8" rx="4" fill="#00E8A8" opacity="0.4"/>' +
          // Solid check marks
          '<rect x="27" y="238" width="14" height="2.5" rx="1" fill="#00E8A8" opacity="0.9"/>' +
          '<rect x="27" y="244" width="20" height="2.5" rx="1" fill="#00E8A8" opacity="0.6"/>' +
          '<rect x="27" y="250" width="16" height="2.5" rx="1" fill="#00E8A8" opacity="0.4"/>' +
          '<path d="M44,237 L46,239 L50,235" stroke="#00E8A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' +
          '<text x="38" y="290" text-anchor="middle" class="ldr-node-label" fill="#00E8A8">PLAN</text>' +
        '</g>' +

        // ═══ Node 2: BUILD — Solid code editor ═══
        '<g class="ldr-node ldr-n2">' +
          '<rect class="ldr-glass" x="130" y="138" width="60" height="58" rx="10"/>' +
          // Editor window filled
          '<rect x="138" y="146" width="44" height="42" rx="5" fill="#00D4FF" opacity="0.12"/>' +
          '<rect x="138" y="146" width="44" height="10" rx="5" fill="#00D4FF" opacity="0.18"/>' +
          '<circle cx="144" cy="151" r="2" fill="#FF6B6B" opacity="0.8"/>' +
          '<circle cx="150" cy="151" r="2" fill="#FFB800" opacity="0.8"/>' +
          '<circle cx="156" cy="151" r="2" fill="#34D399" opacity="0.8"/>' +
          // Solid code lines
          '<rect x="143" y="162" width="18" height="2" rx="1" fill="#00D4FF" opacity="0.9"/>' +
          '<rect x="146" y="168" width="28" height="2" rx="1" fill="#00E8A8" opacity="0.6"/>' +
          '<rect x="146" y="174" width="22" height="2" rx="1" fill="#38BDF8" opacity="0.5"/>' +
          '<rect x="143" y="180" width="15" height="2" rx="1" fill="#00D4FF" opacity="0.4"/>' +
          '<text x="160" y="210" text-anchor="middle" class="ldr-node-label" fill="#00D4FF">BUILD</text>' +
        '</g>' +

        // ═══ Node 3: TEST — Solid bar chart ═══
        '<g class="ldr-node ldr-n3">' +
          '<rect class="ldr-glass" x="224" y="82" width="56" height="58" rx="10"/>' +
          // Solid ascending bars
          '<rect x="232" y="118" width="8" height="14" rx="2" fill="#00B2DC" opacity="0.5"/>' +
          '<rect x="242" y="110" width="8" height="22" rx="2" fill="#00D4FF" opacity="0.7"/>' +
          '<rect x="252" y="100" width="8" height="32" rx="2" fill="#00E8A8" opacity="0.85"/>' +
          '<rect x="262" y="94" width="8" height="38" rx="2" fill="#38BDF8"/>' +
          // Trend arrow
          '<path d="M236,116 L256,98 L268,92" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.4"/>' +
          '<text x="252" y="154" text-anchor="middle" class="ldr-node-label" fill="#00B2DC">TEST</text>' +
        '</g>' +

        // ═══ Node 4: SHIP — Solid rocket ═══
        '<g class="ldr-node ldr-n4">' +
          '<rect class="ldr-glass" x="340" y="22" width="50" height="58" rx="10"/>' +
          // Solid rocket
          '<path d="M365,34 C365,34 373,38 373,50 L370,54 H360 L357,50 C357,38 365,34 365,34Z" fill="#38BDF8" opacity="0.85"/>' +
          '<circle cx="365" cy="44" r="3" fill="rgba(255,255,255,0.5)"/>' +
          '<path d="M361,54 L361,59 L365,57 L369,59 L369,54" fill="#00E8A8" opacity="0.7"/>' +
          // Thrust
          '<rect x="363" y="60" width="1.5" height="5" rx="1" fill="#00E8A8" opacity="0.6"/>' +
          '<rect x="366" y="60" width="1.5" height="6" rx="1" fill="#00D4FF" opacity="0.8"/>' +
          '<rect x="360" y="60" width="1.5" height="4" rx="1" fill="#00E8A8" opacity="0.5"/>' +
          '<text x="365" y="94" text-anchor="middle" class="ldr-node-label" fill="#38BDF8">SHIP</text>' +

          // Live badge
          '<g class="ldr-live-badge">' +
            '<rect x="348" y="96" width="34" height="12" rx="6" fill="#00E8A8" opacity="0.15" stroke="#00E8A8" stroke-width="0.8"/>' +
            '<circle cx="356" cy="102" r="2" fill="#00E8A8"/>' +
            '<text x="368" y="105" text-anchor="middle" fill="#00E8A8" font-size="6.5" font-family="var(--font-mono)" font-weight="700">LIVE</text>' +
          '</g>' +
        '</g>' +

        // Particles
        '<circle class="ldr-particle ldr-p1" cx="80" cy="220" r="1.5" fill="#00E8A8"/>' +
        '<circle class="ldr-particle ldr-p2" cx="200" cy="145" r="1.2" fill="#00D4FF"/>' +
        '<circle class="ldr-particle ldr-p3" cx="300" cy="85" r="1.5" fill="#00B2DC"/>' +
        '<circle class="ldr-particle ldr-p4" cx="350" cy="48" r="1" fill="#38BDF8"/>' +

      '</svg>' +

      // Progress
      '<div class="ldr-bottom">' +
        '<div class="ldr-progress-track"><div class="ldr-progress-fill" id="ldr-fill"></div></div>' +
        '<div class="ldr-meta">' +
          '<span class="ldr-label" id="ldr-label">Planning Sprint</span>' +
          '<span class="ldr-pct" id="ldr-pct">0%</span>' +
        '</div>' +
      '</div>' +
    '</div>';

  var fill = document.getElementById('ldr-fill');
  var label = document.getElementById('ldr-label');
  var pctEl = document.getElementById('ldr-pct');
  var step = 0;

  var nodes = document.querySelectorAll('.ldr-node');
  var phases = [
    { at: 0,  text: 'Planning Sprint',       node: 0 },
    { at: 25, text: 'Building Modules',       node: 1 },
    { at: 50, text: 'Running Test Suite',      node: 2 },
    { at: 78, text: 'Deploying to Production', node: 3 },
    { at: 95, text: 'Live & Monitoring',       node: -1 }
  ];
  var lastPhase = -1;

  var interval = setInterval(function() {
    step += Math.floor(Math.random() * 5) + 2;
    if (step > 95) { step = 95; clearInterval(interval); }

    if (fill) fill.style.width = step + '%';
    if (pctEl) pctEl.textContent = step + '%';

    for (var i = phases.length - 1; i >= 0; i--) {
      if (step >= phases[i].at && i !== lastPhase) {
        lastPhase = i;
        if (label) label.textContent = phases[i].text;
        if (phases[i].node >= 0 && nodes[phases[i].node]) {
          nodes[phases[i].node].classList.add('active');
        }
        break;
      }
    }
  }, 130);

  function hideLoader() {
    clearInterval(interval);
    if (fill) fill.style.width = '100%';
    if (pctEl) pctEl.textContent = '100%';
    if (label) label.textContent = 'Live & Monitoring';
    nodes.forEach(function(n) { n.classList.add('active'); });
    setTimeout(function() {
      loader.classList.add('hidden');
      document.body.classList.remove('loading');
    }, 500);
  }

  if (document.readyState === 'complete') {
    setTimeout(hideLoader, 900);
  } else {
    window.addEventListener('load', function() { setTimeout(hideLoader, 900); });
  }
  setTimeout(hideLoader, 3500);
})();
