/**
 * Print3D — script principal v2
 * Cursor, navbar, mobile menu, reveal, lightbox, FAQ, smooth scroll
 */
(function () {
  'use strict';

  /* =============================================
     CUSTOM CURSOR (desktop only)
  ============================================= */
  var cursor   = document.getElementById('cursor');
  var follower = document.getElementById('follower');
  var mouseX = 0, mouseY = 0;
  var followerX = 0, followerY = 0;
  var isDesktop = window.matchMedia('(pointer: fine)').matches;

  if (isDesktop && cursor) {
    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top  = mouseY + 'px';
    });

    // Smooth follower
    (function animateFollower() {
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;
      var f = document.getElementById('cursor-follower');
      if (f) {
        f.style.left = followerX + 'px';
        f.style.top  = followerY + 'px';
      }
      requestAnimationFrame(animateFollower);
    })();

    // Hover effect
    document.querySelectorAll('a, button, [role="button"], .gallery__item, .faq__question, .product-tile').forEach(function (el) {
      el.addEventListener('mouseenter', function () { document.body.classList.add('cursor-active'); });
      el.addEventListener('mouseleave', function () { document.body.classList.remove('cursor-active'); });
    });
  }

  /* =============================================
     NAVBAR SCROLL
  ============================================= */
  var navbar = document.getElementById('navbar');
  if (navbar) {
    function onScroll() {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* =============================================
     MOBILE MENU
  ============================================= */
  var toggle    = document.getElementById('menu-toggle');
  var mobileNav = document.getElementById('mobile-menu');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var open = mobileNav.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* =============================================
     SCROLL REVEAL
  ============================================= */
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el    = e.target;
        var delay = parseInt(el.getAttribute('data-delay') || '0', 10);
        setTimeout(function () { el.classList.add('visible'); }, delay);
        ro.unobserve(el);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    revealEls.forEach(function (el) { ro.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* =============================================
     LIGHTBOX
  ============================================= */
  var lightbox   = document.getElementById('lightbox');
  var lbImg      = document.getElementById('lightbox-img');
  var lbCaption  = document.getElementById('lightbox-caption');
  var lbClose    = document.getElementById('lightbox-close');
  var lbBackdrop = document.getElementById('lightbox-backdrop');

  function openLightbox(src, alt, caption) {
    if (!lightbox) return;
    lbImg.src     = src;
    lbImg.alt     = alt || '';
    lbCaption.textContent = caption || '';
    lightbox.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    lbClose && lbClose.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.setAttribute('hidden', '');
    document.body.style.overflow = '';
    lbImg.src = ''; lbImg.alt = '';
  }

  document.querySelectorAll('.gallery__item').forEach(function (item) {
    function activate() {
      var img = item.querySelector('img');
      var cap = item.querySelector('figcaption');
      if (!img) return;
      openLightbox(img.src, img.alt, cap ? cap.textContent.trim() : '');
    }
    item.addEventListener('click', activate);
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
    });
  });

  if (lbClose)    lbClose.addEventListener('click', closeLightbox);
  if (lbBackdrop) lbBackdrop.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox && !lightbox.hasAttribute('hidden')) closeLightbox();
  });

  /* =============================================
     SMOOTH SCROLL
  ============================================= */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var href = a.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* =============================================
     FAQ — accordion (fecha os outros)
  ============================================= */
  document.querySelectorAll('.faq__item').forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (!item.open) return;
      document.querySelectorAll('.faq__item').forEach(function (other) {
        if (other !== item && other.open) other.open = false;
      });
    });
  });

})();

