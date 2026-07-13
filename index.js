var LOGO_SRC = "stevorra_logo.png";
  document.getElementById('navLogo').src = LOGO_SRC;
  document.getElementById('footerLogo').src = LOGO_SRC;
  document.getElementById('heroWatermark').src = LOGO_SRC;

  var link = document.createElement('link');
  link.rel = 'icon'; link.type = 'image/png'; link.href = LOGO_SRC;
  document.head.appendChild(link);

  document.getElementById('footerYear').textContent = '© ' + new Date().getFullYear() + ' Stevorra. All rights reserved.';

  // Nav scroll state
  var nav = document.getElementById('siteNav');
  function onScroll(){
    if(window.scrollY > 24){ nav.classList.add('scrolled'); } else { nav.classList.remove('scrolled'); }
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // Mobile menu toggle
  var toggle = document.getElementById('navToggle');
  var panel = document.getElementById('mobilePanel');
  var iconMenu = document.getElementById('iconMenu');
  var iconClose = document.getElementById('iconClose');
  toggle.addEventListener('click', function(){
    var isOpen = panel.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    iconMenu.style.display = isOpen ? 'none' : 'block';
    iconClose.style.display = isOpen ? 'block' : 'none';
  });
  panel.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      panel.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      iconMenu.style.display = 'block';
      iconClose.style.display = 'none';
    });
  });

  // Placeholder nav links (future pages not yet built)
  document.querySelectorAll('[data-future]').forEach(function(a){
    a.addEventListener('click', function(e){
      e.preventDefault();
    });
  });

  // Scroll reveal
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && !reduceMotion){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, {threshold:0.12, rootMargin:'0px 0px -60px 0px'});
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('in'); });
  }