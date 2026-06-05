// timeline.js — Experience timeline interaction
(function() {
  var list = document.getElementById('timeline-list');
  var detail = document.getElementById('timeline-detail');
  if (!list || !detail) return;

  var jobs = [
    { company: 'Oblinex Technologies', role: 'Technical Project Manager', period: '2024 – Present', desc: 'Leading cross-functional teams across 70+ international markets. Managing sprint planning, backlog grooming, QA coordination, and stakeholder reporting for Health-Tech and SaaS products.' },
    { company: 'Elipact Solutions', role: 'Project Coordinator', period: '2023 – 2024', desc: 'Coordinated development workflows for multiple client projects. Implemented Agile practices and reduced delivery timelines by 30%.' },
    { company: 'MyDigiShell', role: 'Frontend Developer', period: '2022 – 2023', desc: 'Built responsive web applications using React.js and Node.js. Transitioned from hands-on development to technical project management.' }
  ];

  // Build timeline
  jobs.forEach(function(job, i) {
    var item = document.createElement('button');
    item.className = 'timeline-item' + (i === 0 ? ' active' : '');
    item.setAttribute('role', 'tab');
    item.innerHTML = '<strong>' + job.company + '</strong><span>' + job.period + '</span>';
    item.style.cssText = 'display:block;width:100%;text-align:left;padding:1rem 1.25rem;background:' + (i === 0 ? 'var(--bg-card-hi)' : 'var(--bg-card)') + ';border:1px solid ' + (i === 0 ? 'var(--border-accent)' : 'var(--border-subtle)') + ';border-radius:var(--radius-md);cursor:pointer;color:var(--text-primary);font-family:var(--font-body);font-size:var(--text-sm);transition:all 0.2s;margin-bottom:0.5rem;';
    item.querySelector('span').style.cssText = 'display:block;font-size:0.75rem;color:var(--text-muted);margin-top:0.25rem;font-weight:400;';
    list.appendChild(item);

    item.addEventListener('click', function() {
      showDetail(i);
      list.querySelectorAll('.timeline-item').forEach(function(el, idx) {
        el.classList.toggle('active', idx === i);
        el.style.background = idx === i ? 'var(--bg-card-hi)' : 'var(--bg-card)';
        el.style.borderColor = idx === i ? 'var(--border-accent)' : 'var(--border-subtle)';
      });
    });
  });

  function showDetail(index) {
    var job = jobs[index];
    detail.innerHTML = '<h3 style="font-size:1.25rem;margin-bottom:0.5rem;">' + job.role + '</h3><p style="color:var(--neon-primary);font-family:var(--font-mono);font-size:0.8rem;margin-bottom:1rem;">' + job.company + ' · ' + job.period + '</p><p style="color:var(--text-secondary);line-height:1.7;">' + job.desc + '</p>';
  }

  showDetail(0);
})();
