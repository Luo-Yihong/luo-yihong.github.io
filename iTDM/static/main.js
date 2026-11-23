(function () {
  // Interactive Tab Switchers (supports multiple independent tab groups via data-group)
  document.querySelectorAll('[data-tab-group]').forEach(groupEl => {
    const groupName = groupEl.dataset.tabGroup;
    const buttons = groupEl.querySelectorAll('.tab');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.target;
        buttons.forEach(b => {
          const active = b === btn;
          b.classList.toggle('active', active);
          b.setAttribute('aria-selected', active ? 'true' : 'false');
        });
        document.querySelectorAll(`[data-pane-group="${groupName}"]`).forEach(pane => {
          pane.classList.toggle('active', pane.id === targetId);
        });
      });
    });
  });

  // Copy Buttons (BibTeX & Quick Start)
  document.querySelectorAll('.copy').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.copyTarget);
      if (!target) return;
      navigator.clipboard.writeText(target.textContent).then(() => {
        const orig = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = orig; }, 1500);
      });
    });
  });

  // Image Lightbox Zoom
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  if (lightbox && lightboxImg) {
    document.querySelectorAll('.zoomable').forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || '';
        lightbox.classList.add('open');
      });
    });

    const closeBox = () => {
      lightbox.classList.remove('open');
      lightboxImg.removeAttribute('src');
    };

    lightbox.addEventListener('click', e => {
      if (e.target === lightbox || e.target === lightboxClose) closeBox();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && lightbox.classList.contains('open')) closeBox();
    });
  }
})();
