/**
 * Impressão 3D — script principal
 * Funcionalidades: navbar scroll, mobile menu, scroll reveal, lightbox, delay animações
 */
(function () {
  'use strict';

  /* =============================================
     NAVBAR — adiciona classe ao rolar
     ============================================= */
  var navbar = document.getElementById('navbar');
  if (navbar) {
    var onNavbarScroll = function () {
      if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onNavbarScroll, { passive: true });
    onNavbarScroll();
  }

  /* =============================================
     MOBILE MENU
     ============================================= */
  var menuToggle = document.getElementById('menu-toggle');
  var mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('open');
      menuToggle.classList.toggle('open', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Fecha ao clicar em link
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* =============================================
     SCROLL REVEAL
     ============================================= */
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var delay = el.getAttribute('data-delay') || '0';
          setTimeout(function () {
            el.classList.add('visible');
          }, parseInt(delay, 10));
          revealObserver.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    // Fallback: mostra tudo imediatamente
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* =============================================
     LIGHTBOX
     ============================================= */
  var lightbox    = document.getElementById('lightbox');
  var lbImg       = document.getElementById('lightbox-img');
  var lbCaption   = document.getElementById('lightbox-caption');
  var lbClose     = document.getElementById('lightbox-close');
  var lbBackdrop  = document.getElementById('lightbox-backdrop');

  function openLightbox(src, alt, caption) {
    if (!lightbox || !lbImg) return;
    lbImg.src = src;
    lbImg.alt = alt || '';
    if (lbCaption) lbCaption.textContent = caption || '';
    lightbox.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    if (lbClose) lbClose.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.setAttribute('hidden', '');
    document.body.style.overflow = '';
    if (lbImg) { lbImg.src = ''; lbImg.alt = ''; }
  }

  // Abre ao clicar nos itens da gallery
  document.querySelectorAll('.gallery__item').forEach(function (item) {
    function activate() {
      var img     = item.querySelector('img');
      var caption = item.querySelector('figcaption');
      if (!img) return;
      openLightbox(img.src, img.alt, caption ? caption.textContent.trim() : '');
    }

    item.addEventListener('click', activate);
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
    });
  });

  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbBackdrop) lbBackdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox && !lightbox.hasAttribute('hidden')) {
      closeLightbox();
    }
  });

  /* =============================================
     SMOOTH SCROLL — links internos
     ============================================= */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = link.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* =============================================
     FAQ — fecho os outros ao abrir um
     ============================================= */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open) {
        document.querySelectorAll('.faq-item').forEach(function (other) {
          if (other !== item && other.open) other.open = false;
        });
      }
    });
  });

})();

