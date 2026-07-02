(() => {
  const body = document.body;
  const button = document.querySelector('.mobile-menu');
  const nav = document.querySelector('#primary-nav');

  const closeMenu = () => {
    if (!button) return;
    body.classList.remove('nav-open');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open menu');
  };

  if (button && nav) {
    button.addEventListener('click', () => {
      const isOpen = body.classList.toggle('nav-open');
      button.setAttribute('aria-expanded', String(isOpen));
      button.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu();
    });

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) closeMenu();
    });
  }

  const proofPanel = document.querySelector('.trust-proof-panel');
  const graphWrap = document.querySelector('.trust-graph-wrap');

  const countNumbers = () => {
    if (!proofPanel || proofPanel.dataset.counted === 'true') return;
    proofPanel.dataset.counted = 'true';

    proofPanel.querySelectorAll('[data-count]').forEach((el) => {
      const target = Number(el.dataset.count);
      const isDecimal = !Number.isInteger(target);
      const duration = 1150;
      const start = performance.now();

      el.textContent = '0';

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;

        el.textContent = isDecimal ? value.toFixed(1) : String(Math.round(value));

        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = isDecimal ? target.toFixed(1) : String(target);
      };

      requestAnimationFrame(tick);
    });
  };

  const observedSections = document.querySelectorAll('.trust-section, .observed-section');
  const serviceCards = document.querySelector('.observed-service-cards');

  if ('IntersectionObserver' in window) {
    if (observedSections.length) {
      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('in-view');
          sectionObserver.unobserve(entry.target);
        });
      }, { threshold: 0.16, rootMargin: '0px 0px -18% 0px' });

      observedSections.forEach((section) => sectionObserver.observe(section));
    }

    if (serviceCards) {
      const serviceObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('services-in-view');
          serviceObserver.disconnect();
        });
      }, { threshold: 0.22, rootMargin: '0px 0px -12% 0px' });

      serviceObserver.observe(serviceCards);
    }

    if (proofPanel) {
      const countObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          countNumbers();
          countObserver.disconnect();
        });
      }, { threshold: 0.55, rootMargin: '0px 0px -18% 0px' });

      countObserver.observe(proofPanel);
    }

    if (graphWrap) {
      const graphObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          graphWrap.classList.add('graph-in-view');
          graphObserver.disconnect();
        });
      }, { threshold: 0.45, rootMargin: '0px 0px -12% 0px' });

      graphObserver.observe(graphWrap);
    }
  } else {
    observedSections.forEach((section) => section.classList.add('in-view'));
    if (serviceCards) serviceCards.classList.add('services-in-view');
    if (graphWrap) graphWrap.classList.add('graph-in-view');
    countNumbers();
  }

  // First Stage card and CTA animations should trigger when each block itself reaches the viewport.
  const ownerCardsMotion = document.querySelector('.owner-cards-motion');
  const ctaMotionCard = document.querySelector('.cta-motion-card');

  const observeOnce = (target, className, options) => {
    if (!target) return;
    if (!('IntersectionObserver' in window)) {
      target.classList.add(className);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        target.classList.add(className);
        observer.unobserve(target);
      });
    }, options);

    observer.observe(target);
  };

  observeOnce(ownerCardsMotion, 'owner-cards-in-view', {
    threshold: 0.18,
    rootMargin: '0px 0px -16% 0px'
  });

  observeOnce(ctaMotionCard, 'cta-card-in-view', {
    threshold: 0.20,
    rootMargin: '0px 0px -14% 0px'
  });


  // Count-up animation for the Visibility metrics.
  const countUpEls = document.querySelectorAll('.count-up');
  if (countUpEls.length) {
    const formatValue = (value, decimals, format) => {
      const fixed = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
      if (format === 'comma') {
        const parts = fixed.split('.');
        parts[0] = Number(parts[0]).toLocaleString('en-US');
        return parts.join('.');
      }
      return fixed;
    };

    const runCount = (el) => {
      if (el.dataset.counted === 'true') return;
      el.dataset.counted = 'true';

      const target = parseFloat(el.dataset.count || '0');
      const decimals = parseInt(el.dataset.decimals || '0', 10);
      const format = el.dataset.format || '';
      const duration = 1100;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        el.textContent = formatValue(value, decimals, format);
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          el.textContent = formatValue(target, decimals, format);
        }
      };

      requestAnimationFrame(tick);
    };

    if ('IntersectionObserver' in window) {
      const countObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.querySelectorAll('.count-up').forEach(runCount);
          countObserver.unobserve(entry.target);
        });
      }, { threshold: 0.28, rootMargin: '0px 0px -10% 0px' });

      document.querySelectorAll('.visibility-count-card').forEach((card) => countObserver.observe(card));
    } else {
      countUpEls.forEach(runCount);
    }
  }

})();


/* NOVI CTA CARD MOTION FALLBACK */
(() => {
  const cards = document.querySelectorAll('.already-tried-cta-card');
  if (!cards.length || !('IntersectionObserver' in window)) {
    cards.forEach(card => card.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.28, rootMargin: '0px 0px -8% 0px' });
  cards.forEach(card => observer.observe(card));
})();
