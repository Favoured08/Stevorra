document.addEventListener('DOMContentLoaded', function () {

  // ---------- Footer year ----------
  var yearEl = document.getElementById('footerYear');
  if (yearEl) {
    yearEl.textContent = '© ' + new Date().getFullYear() + ' Stevorra. All rights reserved.';
  }

  // ---------- Nav scroll state ----------
  var nav = document.getElementById('siteNav');
  function onScroll() {
    if (window.scrollY > 24) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- Mobile menu toggle ----------
  var toggle = document.getElementById('navToggle');
  var panel = document.getElementById('mobilePanel');
  var iconMenu = document.getElementById('iconMenu');
  var iconClose = document.getElementById('iconClose');

  function closePanel() {
    panel.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    iconMenu.style.display = '';
    iconClose.style.display = 'none';
  }

  function openPanel() {
    panel.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    iconMenu.style.display = 'none';
    iconClose.style.display = '';
  }

  toggle.addEventListener('click', function () {
    var isOpen = panel.classList.contains('open');
    if (isOpen) { closePanel(); } else { openPanel(); }
  });

  panel.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { closePanel(); });
  });

  // Close the mobile panel if the viewport is resized back up to desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 960) { closePanel(); }
  });

  // ---------- Placeholder nav links (pages not yet built) ----------
  document.querySelectorAll('[data-future]').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); });
  });

  // ---------- Scroll reveal ----------
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

});
