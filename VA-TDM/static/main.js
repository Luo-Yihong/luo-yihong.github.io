(function () {
  const samples = window.H3_SAMPLES || [];
  const methods = ['base', 'fast', 'vatdm'];
  const vids = Object.fromEntries(methods.map(m => [m, document.getElementById('v-' + m)]));
  const playBtn = document.getElementById('btn-play');
  const seek = document.getElementById('seek');
  const thumbs = document.getElementById('thumbs');
  let current = null;
  let seeking = false;

  const lead = () => vids.vatdm;
  const isPlaying = () => !lead().paused;

  function setAudio() {
    const pick = document.querySelector('input[name="audio"]:checked').value;
    methods.forEach(m => { vids[m].muted = pick !== m; });
  }

  function setPlayLabel() {
    playBtn.textContent = isPlaying() ? '❚❚ Pause' : '▶ Play all';
  }

  function load(sample, autoplay) {
    current = sample;
    methods.forEach(m => {
      const v = vids[m];
      v.pause();
      v.poster = `static/videos/${sample.id}_${m}.jpg`;
      v.src = `static/videos/${sample.id}_${m}.mp4`;
      v.preload = autoplay ? 'auto' : 'metadata';
      v.load();
    });
    document.getElementById('p-title').textContent = sample.title;
    document.getElementById('p-summary').textContent = sample.summary;
    document.getElementById('p-full').textContent = sample.prompt;
    thumbs.querySelectorAll('.thumb').forEach(t => t.classList.toggle('active', t.dataset.id === sample.id));
    seek.value = 0;
    setAudio();
    if (autoplay) playAll();
    setPlayLabel();
  }

  function playAll() {
    const t = lead().currentTime;
    methods.forEach(m => {
      const v = vids[m];
      if (Math.abs(v.currentTime - t) > 0.05) v.currentTime = Math.min(t, v.duration || t);
      v.play().catch(() => {});
    });
  }

  function pauseAll() { methods.forEach(m => vids[m].pause()); }

  function seekAll(t) {
    methods.forEach(m => {
      const v = vids[m];
      v.currentTime = Math.min(t, (v.duration || t) - 0.01);
    });
  }

  playBtn.addEventListener('click', () => { isPlaying() ? pauseAll() : playAll(); });
  document.getElementById('btn-restart').addEventListener('click', () => { seekAll(0); playAll(); });
  document.querySelectorAll('input[name="audio"]').forEach(r => r.addEventListener('change', setAudio));

  const v0 = lead();
  v0.addEventListener('play', setPlayLabel);
  v0.addEventListener('pause', setPlayLabel);
  v0.addEventListener('ended', () => { pauseAll(); setPlayLabel(); });
  v0.addEventListener('timeupdate', () => {
    if (!seeking && v0.duration) seek.value = Math.round(1000 * v0.currentTime / v0.duration);
    if (!v0.paused) {
      ['base', 'fast'].forEach(m => {
        const v = vids[m];
        if (v.duration && v0.currentTime < v.duration && Math.abs(v.currentTime - v0.currentTime) > 0.25) v.currentTime = v0.currentTime;
      });
    }
  });
  seek.addEventListener('input', () => {
    seeking = true;
    if (v0.duration) seekAll(v0.duration * seek.value / 1000);
  });
  seek.addEventListener('change', () => { seeking = false; });
  methods.forEach(m => vids[m].addEventListener('click', () => { isPlaying() ? pauseAll() : playAll(); }));

  samples.forEach(s => {
    const b = document.createElement('button');
    b.className = 'thumb';
    b.dataset.id = s.id;
    b.title = s.title;
    b.innerHTML = `<img loading="lazy" src="static/videos/${s.id}_vatdm.jpg" alt="">` +
      `<span class="cap"></span>`;
    b.querySelector('.cap').textContent = s.title;
    b.addEventListener('click', () => {
      load(s, true);
      document.getElementById('player').scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    thumbs.appendChild(b);
  });
  if (samples.length) load(samples[0], false);

  document.querySelectorAll('.tab').forEach(tab => tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t === tab));
    document.querySelectorAll('.tabpane').forEach(p => p.classList.toggle('active', p.id === 'tab-' + tab.dataset.tab));
  }));

  const copyBtn = document.getElementById('copy-bib');
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(document.getElementById('bib-text').textContent).then(() => {
      copyBtn.textContent = 'Copied';
      setTimeout(() => { copyBtn.textContent = 'Copy'; }, 1500);
    });
  });
})();
