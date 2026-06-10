/* ============================================================
   Fernando Sibarani — Portfolio · shared behaviour
   theme · nav · scroll-reveal · cross-page tweak application
   ============================================================ */
(function () {
  'use strict';
  var root = document.documentElement;
  var LS = window.localStorage;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- theme ---- (initial paint handled by inline head script) */
  function applyTheme(t) {
    root.dataset.theme = t;
    var btns = document.querySelectorAll('.theme-toggle');
    btns.forEach(function (b) {
      b.setAttribute('aria-label', t === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
      b.setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false');
    });
  }
  window.__setTheme = function (t) { LS.setItem('fs-theme', t); applyTheme(t); };

  document.addEventListener('click', function (e) {
    var tog = e.target.closest('.theme-toggle');
    if (!tog) return;
    var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    window.__setTheme(next);
  });

  /* ---- language (en / id) ---- */
  function applyLang(lang) {
    root.setAttribute('lang', lang);
    document.querySelectorAll('[data-en]').forEach(function (el) {
      var v = el.getAttribute('data-' + lang);
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll('[data-en-html]').forEach(function (el) {
      var v = el.getAttribute('data-' + lang + '-html');
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll('.lang-toggle').forEach(function (b) {
      b.setAttribute('aria-label', lang === 'en' ? 'Ganti ke Bahasa Indonesia' : 'Switch to English');
    });
  }
  window.__setLang = function (l) { try { LS.setItem('fs-lang', l); } catch (e) {} applyLang(l); };

  var curLang = 'en';
  try { curLang = LS.getItem('fs-lang') || 'en'; } catch (e) {}
  applyLang(curLang);

  document.addEventListener('click', function (e) {
    var lt = e.target.closest('.lang-toggle');
    if (!lt) return;
    var next = root.getAttribute('lang') === 'id' ? 'en' : 'id';
    window.__setLang(next);
  });

  /* ---- cross-page tweak application (accent / style / default) ---- */
  window.__applyTweaks = function (t) {
    if (!t) return;
    if (t.accent) { root.style.setProperty('--accent', t.accent); LS.setItem('fs-accent', t.accent); }
    if (t.accentInk) { root.style.setProperty('--accent-ink', t.accentInk); LS.setItem('fs-accent-ink', t.accentInk); }
    if (t.style) { root.dataset.style = t.style; LS.setItem('fs-style', t.style); }
    if (t.themeDefault) { LS.setItem('fs-theme-default', t.themeDefault); }
  };

  /* ---- sticky header ---- */
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-stuck', window.scrollY > 12); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---- mobile menu ---- */
  var menuBtn = document.querySelector('.menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      var open = document.body.classList.toggle('menu-open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      a.addEventListener('click', function () { document.body.classList.remove('menu-open'); menuBtn.setAttribute('aria-expanded', 'false'); });
    });
  }

  /* ---- smooth anchor scroll with header offset ---- */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute('href');
    if (id === '#' || id.length < 2) return;
    var target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    var y = target.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
    history.replaceState(null, '', id);
  });

  /* ---- scroll reveal ---- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- scrollspy for landing nav ---- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-links a[href^="#"]'));
  var sections = navLinks.map(function (l) { return document.querySelector(l.getAttribute('href')); }).filter(Boolean);
  if (sections.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var id = '#' + en.target.id;
        navLinks.forEach(function (l) { l.classList.toggle('active', l.getAttribute('href') === id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---- subtle pointer parallax on hero orbs ---- */
  if (!reduce) {
    var orbs = document.querySelectorAll('.hero-orb');
    if (orbs.length) {
      window.addEventListener('pointermove', function (e) {
        var cx = (e.clientX / window.innerWidth - 0.5);
        var cy = (e.clientY / window.innerHeight - 0.5);
        orbs.forEach(function (o, i) {
          var d = (i + 1) * 14;
          o.style.transform = 'translate(' + (cx * d) + 'px,' + (cy * d) + 'px)';
        });
      }, { passive: true });
    }
  }

  /* ---- hero entrance (transition-based, robust to paused renders) ---- */
  var hero = document.querySelector('.hero');
  if (hero && !reduce) {
    hero.classList.add('armed');
    void hero.offsetWidth;            // force reflow so the transition has a start frame
    hero.classList.add('entered');    // synchronous: final state is always 'visible'
  }

  /* ---- page-enter class once loaded ---- */
  document.body.classList.add('page-enter');
})();
