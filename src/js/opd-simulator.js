// opd-simulator.js — TokenQ OPD Queue Live Simulator
(function() {
  var btnNext = document.getElementById('btn-sim-next');
  var btnAdd = document.getElementById('btn-sim-add');
  var txtActive = document.getElementById('sim-active-token');
  var txtQueue = document.getElementById('sim-queue-size');
  var feed = document.getElementById('sim-feed');

  if (!btnNext || !btnAdd || !txtActive || !txtQueue || !feed) return;

  var activeToken = 14;
  var queueSize = 3;

  function addLog(text, isAlert) {
    var div = document.createElement('div');
    div.style.color = isAlert ? 'var(--neon-primary)' : 'var(--text-muted)';
    div.textContent = '> ' + text;
    feed.appendChild(div);
    feed.scrollTop = feed.scrollHeight;
  }

  btnNext.addEventListener('click', function() {
    if (queueSize <= 0) {
      addLog('OPD Queue is empty. Add patients first.', false);
      return;
    }
    activeToken++;
    queueSize--;
    
    txtActive.textContent = activeToken;
    txtQueue.innerHTML = queueSize + '<span style="font-size:1.2rem; font-weight:500; color:var(--text-muted);"> patients</span>';
    
    addLog('Token ' + activeToken + ' called to OPD Room 1.', true);
  });

  btnAdd.addEventListener('click', function() {
    queueSize++;
    var nextTokenNum = activeToken + queueSize;
    
    txtQueue.innerHTML = queueSize + '<span style="font-size:1.2rem; font-weight:500; color:var(--text-muted);"> patients</span>';
    
    addLog('Patient registered. Token ' + nextTokenNum + ' added to wait queue.', false);
  });
})();
