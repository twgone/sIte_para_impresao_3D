/* =============================================
   TOKENS & RESET
   ============================================= */
:root {
  --bg: #0a0b0f;
  --bg-alt: #10121a;
  --surface: #13161f;
  --surface-raised: #181c28;
  --surface-hover: #1e2334;
  --border: rgba(255,255,255,0.07);
  --border-accent: rgba(138,112,255,0.35);

  --ink: #f0f2f8;
  --ink-muted: #8b92a8;
  --ink-faint: #565d72;

  --purple: #8a70ff;
  --purple-light: #b4a3ff;
  --purple-dark: #6352cc;
  --teal: #38bdf8;
  --teal-dark: #0ea5e9;
  --green: #22c55e;
  --green-dark: #16a34a;
  --accent: #d0f066;

  --wa-green: #22c55e;
  --wa-green-hover: #16a34a;

  --gradient-brand: linear-gradient(135deg, #8a70ff 0%, #38bdf8 100%);
  --gradient-hero: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(138,112,255,0.22) 0%, transparent 70%);
  --gradient-glow: 0 0 40px rgba(138,112,255,0.3), 0 0 80px rgba(56,189,248,0.15);

  --radius-sm: 10px;
  --radius: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --radius-pill: 9999px;

  --shadow-card: 0 1px 3px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.3);
  --shadow-raised: 0 4px 24px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.4);
  --shadow-float: 0 8px 40px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.4);

  --dur-fast: 140ms;
  --dur: 220ms;
  --dur-slow: 380ms;
  --ease-spring: cubic-bezier(0.34, 1.4, 0.64, 1);
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}

*, *::before, *::after { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--ink);
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

img { display: block; max-width: 100%; }

a { color: inherit; text-decoration: none; }

p { margin: 0; }

h1, h2, h3, h4 {
  font-family: 'Outfit', system-ui, sans-serif;
  margin: 0;
  line-height: 1.15;
}

details { margin: 0; }
summary { list-style: none; }
summary::-webkit-details-marker { display: none; }

.skip-link {
  position: absolute;
  left: -9999px;
  z-index: 200;
  padding: 0.75rem 1rem;
  background: var(--surface);
  color: var(--ink);
  border-radius: 8px;
  font-weight: 600;
}
.skip-link:focus { left: 1rem; top: 1rem; outline: 2px solid var(--purple); }

/* =============================================
   LAYOUT
   ============================================= */
.container {
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

@media (min-width: 768px) {
  .container { padding-left: 2rem; padding-right: 2rem; }
}

/* =============================================
   NAVBAR
   ============================================= */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  transition: background var(--dur) ease, box-shadow var(--dur) ease, backdrop-filter var(--dur) ease;
}

.navbar.scrolled {
  background: rgba(10,11,15,0.85);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: 0 1px 0 var(--border), 0 4px 24px rgba(0,0,0,0.4);
}

.navbar__inner {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  height: 68px;
}

.navbar__brand {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--ink);
  flex-shrink: 0;
}

.navbar__brand-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px; height: 34px;
  background: var(--gradient-brand);
  border-radius: 9px;
  color: #fff;
  flex-shrink: 0;
}

.navbar__links {
  display: none;
  align-items: center;
  gap: 0.25rem;
  margin-left: auto;
}

@media (min-width: 768px) {
  .navbar__links { display: flex; }
}

.navbar__links a {
  padding: 0.45rem 0.85rem;
  border-radius: var(--radius-pill);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--ink-muted);
  transition: color var(--dur-fast) ease, background var(--dur-fast) ease;
}

.navbar__links a:hover {
  color: var(--ink);
  background: rgba(255,255,255,0.06);
}

.menu-toggle {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
}

@media (min-width: 768px) { .menu-toggle { display: none; } }

.menu-toggle span {
  display: block;
  width: 22px; height: 2px;
  background: var(--ink);
  border-radius: 2px;
  transition: transform var(--dur) ease, opacity var(--dur) ease;
}

.menu-toggle.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.menu-toggle.open span:nth-child(2) { opacity: 0; }
.menu-toggle.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

.mobile-menu {
  display: none;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.75rem 1.25rem 1.25rem;
  background: rgba(10,11,15,0.97);
  backdrop-filter: blur(18px);
  border-top: 1px solid var(--border);
}

.mobile-menu.open { display: flex; }

.mobile-menu a:not(.btn-wa) {
  padding: 0.75rem 1rem;
  border-radius: var(--radius-sm);
  font-size: 1rem;
  font-weight: 500;
  color: var(--ink-muted);
  transition: color var(--dur-fast), background var(--dur-fast);
}

.mobile-menu a:not(.btn-wa):hover { color: var(--ink); background: rgba(255,255,255,0.06); }
.mobile-menu .btn-wa { margin-top: 0.5rem; }

/* CTA in nav */
.navbar__inner > .btn-wa--small { margin-left: auto; display: none; }
@media (min-width: 768px) { .navbar__inner > .btn-wa--small { display: inline-flex; margin-left: 0; } }

/* =============================================
   BUTTONS
   ============================================= */
.btn-wa {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  border-radius: var(--radius-pill);
  text-decoration: none;
  color: #fff;
  background: var(--wa-green);
  transition:
    background var(--dur-fast) ease,
    transform var(--dur-fast) var(--ease-spring),
    box-shadow var(--dur-fast) ease;
  cursor: pointer;
  border: none;
  line-height: 1;
}

.btn-wa:hover { background: var(--wa-green-hover); transform: translateY(-2px); }
.btn-wa:active { transform: translateY(0); }

.btn-wa--small {
  padding: 0.55rem 1.1rem;
  font-size: 0.875rem;
  box-shadow: 0 4px 16px rgba(34,197,94,0.3);
}

.btn-wa--large {
  padding: 1rem 2rem;
  font-size: 1.1rem;
  box-shadow: 0 6px 28px rgba(34,197,94,0.35);
}

.btn-wa--large:hover { box-shadow: 0 8px 36px rgba(34,197,94,0.45); }

.btn-wa--glow {
  box-shadow: 0 6px 28px rgba(34,197,94,0.4), 0 0 60px rgba(34,197,94,0.15);
  animation: btn-pulse 2.5s ease-in-out infinite;
}

.btn-wa__icon { flex-shrink: 0; }

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.95rem 1.75rem;
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  border-radius: var(--radius-pill);
  border: 1.5px solid var(--border-accent);
  color: var(--purple-light);
  background: transparent;
  transition: background var(--dur-fast), border-color var(--dur-fast), transform var(--dur-fast) var(--ease-spring);
  cursor: pointer;
}

.btn-ghost:hover { background: rgba(138,112,255,0.1); border-color: var(--purple); transform: translateY(-2px); }

@keyframes btn-pulse {
  0%, 100% { box-shadow: 0 6px 28px rgba(34,197,94,0.4), 0 0 60px rgba(34,197,94,0.15); }
  50%        { box-shadow: 0 6px 36px rgba(34,197,94,0.55), 0 0 80px rgba(34,197,94,0.25); }
}

/* =============================================
   GRADIENT TEXT
   ============================================= */
.gradient-text {
  background: var(--gradient-brand);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

/* =============================================
   HERO
   ============================================= */
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 100px 0 80px;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gradient-hero);
  pointer-events: none;
}

/* Orbs */
.hero__orbs { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.35;
  animation: orb-float 8s ease-in-out infinite;
}

.orb--purple {
  width: 600px; height: 600px;
  background: radial-gradient(circle, #8a70ff 0%, transparent 70%);
  top: -200px; left: -150px;
  animation-delay: 0s;
}

.orb--teal {
  width: 500px; height: 500px;
  background: radial-gradient(circle, #38bdf8 0%, transparent 70%);
  bottom: -150px; right: -100px;
  animation-delay: -4s;
}

@keyframes orb-float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(40px, -30px) scale(1.05); }
  66%       { transform: translate(-20px, 20px) scale(0.97); }
}

/* Particles */
.hero__bg-particles { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }

.particle {
  position: absolute;
  border-radius: 50%;
  background: var(--purple-light);
  opacity: 0;
  animation: particle-rise 6s ease-in-out infinite;
}

.particle--1 { width: 4px; height: 4px; left: 15%; bottom: 20%; animation-delay: 0s; }
.particle--2 { width: 6px; height: 6px; left: 35%; bottom: 10%; animation-delay: 1.5s; background: var(--teal); }
.particle--3 { width: 3px; height: 3px; left: 60%; bottom: 25%; animation-delay: 3s; }
.particle--4 { width: 5px; height: 5px; left: 80%; bottom: 15%; animation-delay: 2s; background: var(--accent); }
.particle--5 { width: 4px; height: 4px; left: 50%; bottom: 5%; animation-delay: 4.5s; background: var(--teal); }

@keyframes particle-rise {
  0%         { opacity: 0; transform: translateY(0) scale(0); }
  10%        { opacity: 0.8; transform: translateY(-20px) scale(1); }
  90%        { opacity: 0.6; }
  100%       { opacity: 0; transform: translateY(-200px) scale(0.5); }
}

.hero__content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.45rem 1.1rem;
  background: rgba(138,112,255,0.12);
  border: 1px solid rgba(138,112,255,0.3);
  border-radius: var(--radius-pill);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--purple-light);
  animation: fade-up 0.6s var(--ease-out) both;
}

.hero__badge-dot {
  width: 8px; height: 8px;
  background: var(--green);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--green);
  animation: dot-pulse 2s ease-in-out infinite;
}

@keyframes dot-pulse {
  0%, 100% { box-shadow: 0 0 6px var(--green); }
  50%       { box-shadow: 0 0 14px var(--green), 0 0 24px rgba(34,197,94,0.4); }
}

.hero__title {
  font-size: clamp(2.4rem, 6vw, 4.5rem);
  font-weight: 900;
  color: var(--ink);
  letter-spacing: -0.03em;
  max-width: 820px;
  animation: fade-up 0.7s 0.1s var(--ease-out) both;
}

.hero__subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--ink-muted);
  max-width: 580px;
  line-height: 1.6;
  animation: fade-up 0.7s 0.2s var(--ease-out) both;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;
  animation: fade-up 0.7s 0.3s var(--ease-out) both;
}

.hero__phone {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: var(--ink-muted);
  font-weight: 500;
  animation: fade-up 0.7s 0.4s var(--ease-out) both;
}

.hero__tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  animation: fade-up 0.7s 0.5s var(--ease-out) both;
}

.tag {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.9rem;
  background: rgba(255,255,255,0.05);
  border: 1px solid var(--border);
  border-radius: var(--radius-pill);
  font-size: 0.82rem;
  color: var(--ink-muted);
}

/* Scroll hint */
.hero__scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: fade-up 1s 1s var(--ease-out) both;
}

.scroll-mouse {
  width: 24px; height: 38px;
  border: 2px solid rgba(255,255,255,0.2);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 5px;
}

.scroll-wheel {
  width: 3px; height: 8px;
  background: rgba(255,255,255,0.4);
  border-radius: 2px;
  animation: scroll-down 1.8s ease-in-out infinite;
}

@keyframes scroll-down {
  0%   { transform: translateY(0); opacity: 1; }
  80%  { transform: translateY(10px); opacity: 0; }
  100% { transform: translateY(0); opacity: 0; }
}

/* =============================================
   NOTICE STRIP
   ============================================= */
.notice-strip {
  background: rgba(56,189,248,0.08);
  border-top: 1px solid rgba(56,189,248,0.18);
  border-bottom: 1px solid rgba(56,189,248,0.18);
  padding: 0.85rem 0;
}

.notice-strip .container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  font-size: 0.875rem;
  color: var(--teal);
  text-align: center;
  flex-wrap: wrap;
}

/* =============================================
   SECTIONS
   ============================================= */
.section {
  padding: 6rem 0;
}

.section--alt {
  background: var(--bg-alt);
}

.section__header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.section__tag {
  display: inline-block;
  padding: 0.3rem 0.9rem;
  background: rgba(138,112,255,0.12);
  border: 1px solid rgba(138,112,255,0.25);
  border-radius: var(--radius-pill);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--purple-light);
  margin-bottom: 1rem;
}

.section__title {
  font-size: clamp(1.85rem, 4vw, 2.8rem);
  font-weight: 800;
  color: var(--ink);
  letter-spacing: -0.025em;
  margin-bottom: 0.9rem;
}

.section__subtitle {
  font-size: 1.05rem;
  color: var(--ink-muted);
  max-width: 540px;
  margin: 0 auto;
  line-height: 1.6;
}

/* =============================================
   REVEAL ANIMATION
   ============================================= */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.65s var(--ease-out), transform 0.65s var(--ease-out);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* =============================================
   HOW IT WORKS — STEPS
   ============================================= */
.steps-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
}

@media (min-width: 680px) { .steps-grid { grid-template-columns: repeat(3, 1fr); } }

.step-card {
  position: relative;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2rem 1.75rem;
  transition:
    transform var(--dur-slow) var(--ease-spring),
    border-color var(--dur) ease,
    box-shadow var(--dur) ease;
}

.step-card:hover {
  transform: translateY(-6px);
  border-color: var(--border-accent);
  box-shadow: 0 12px 40px rgba(138,112,255,0.12), var(--shadow-raised);
}

.step-card__number {
  font-family: 'Outfit', sans-serif;
  font-weight: 900;
  font-size: 3rem;
  line-height: 1;
  background: var(--gradient-brand);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.step-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px; height: 52px;
  background: rgba(138,112,255,0.12);
  border: 1px solid rgba(138,112,255,0.2);
  border-radius: 14px;
  color: var(--purple-light);
  margin-bottom: 1.25rem;
}

.step-card__title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 0.65rem;
}

.step-card__text {
  font-size: 0.925rem;
  color: var(--ink-muted);
  line-height: 1.65;
}

.tip-box {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 2.5rem;
  padding: 1.25rem 1.5rem;
  background: rgba(34,197,94,0.06);
  border: 1px solid rgba(34,197,94,0.2);
  border-radius: var(--radius);
}

.tip-box__icon { font-size: 1.5rem; flex-shrink: 0; margin-top: 2px; }

.tip-box p { font-size: 0.95rem; color: var(--ink-muted); line-height: 1.6; }
.tip-box strong { color: var(--ink); }

/* =============================================
   WHAT CAN BE PRINTED — ITEMS GRID
   ============================================= */
.items-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

@media (min-width: 480px) { .items-grid { grid-template-columns: repeat(3, 1fr); } }
@media (min-width: 768px) { .items-grid { grid-template-columns: repeat(4, 1fr); } }

.item-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.65rem;
  padding: 1.5rem 1rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  text-align: center;
  cursor: default;
  transition:
    transform var(--dur-slow) var(--ease-spring),
    border-color var(--dur) ease,
    background var(--dur) ease;
}

.item-card:hover {
  transform: translateY(-4px) scale(1.02);
  border-color: var(--border-accent);
  background: var(--surface-raised);
}

.item-card__emoji { font-size: 2rem; line-height: 1; }

.item-card__label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--ink-muted);
  line-height: 1.4;
}

/* =============================================
   GALLERY
   ============================================= */
.gallery {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

@media (min-width: 540px) { .gallery { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 900px) { .gallery { grid-template-columns: repeat(3, 1fr); } }

.gallery__item {
  margin: 0;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  cursor: pointer;
  position: relative;
  transition: transform var(--dur-slow) var(--ease-spring), box-shadow var(--dur) ease, border-color var(--dur) ease;
}

.gallery__item:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 16px 48px rgba(0,0,0,0.5);
  border-color: var(--border-accent);
}

.gallery__item:focus-visible {
  outline: 2px solid var(--purple);
  outline-offset: 3px;
}

.gallery__item img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  transition: transform 0.5s var(--ease-out);
}

.gallery__item:hover img { transform: scale(1.05); }

.gallery__item figcaption {
  padding: 0.75rem 1rem;
  font-size: 0.85rem;
  color: var(--ink-muted);
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.gallery__cat {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--purple-light);
}

.gallery__overlay {
  position: absolute;
  inset: 0;
  background: rgba(138,112,255,0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  opacity: 0;
  transition: opacity var(--dur) ease;
}

.gallery__item:hover .gallery__overlay { opacity: 1; }

.gallery-cta {
  text-align: center;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}

.gallery-cta p { font-size: 1rem; color: var(--ink-muted); }
.gallery-cta strong { color: var(--ink); }

/* =============================================
   FAQ
   ============================================= */
.faq-list { display: flex; flex-direction: column; gap: 0.75rem; max-width: 760px; margin: 0 auto; }

.faq-item {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: border-color var(--dur) ease;
}

.faq-item[open] { border-color: var(--border-accent); }

.faq-item__question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: var(--ink);
  cursor: pointer;
  transition: background var(--dur-fast) ease, color var(--dur-fast) ease;
  user-select: none;
}

.faq-item__question:hover { background: rgba(255,255,255,0.03); }

.faq-item__arrow {
  flex-shrink: 0;
  color: var(--ink-muted);
  transition: transform var(--dur) var(--ease-spring);
}

.faq-item[open] .faq-item__arrow { transform: rotate(180deg); color: var(--purple-light); }

.faq-item__answer {
  padding: 0 1.5rem 1.25rem;
  font-size: 0.95rem;
  color: var(--ink-muted);
  line-height: 1.65;
  animation: faq-open 0.3s var(--ease-out) both;
}

@keyframes faq-open {
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* =============================================
   CTA SECTION
   ============================================= */
.cta-section {
  position: relative;
  padding: 7rem 0;
  text-align: center;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 80% at 50% 50%, rgba(138,112,255,0.15) 0%, transparent 70%);
  pointer-events: none;
}

.cta-section__orb {
  position: absolute;
  width: 700px; height: 700px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%);
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  filter: blur(40px);
  pointer-events: none;
  animation: orb-float 10s ease-in-out infinite;
}

.cta-section__inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}

.cta-section__title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  letter-spacing: -0.025em;
  max-width: 700px;
  background: linear-gradient(135deg, var(--ink) 0%, var(--purple-light) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.cta-section__subtitle {
  font-size: 1.1rem;
  color: var(--ink-muted);
  max-width: 480px;
}

.cta-section__actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.cta-section__phone {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: var(--ink-muted);
}

/* =============================================
   FOOTER
   ============================================= */
.footer {
  padding: 3rem 0 5rem;
  text-align: center;
  border-top: 1px solid var(--border);
}

.footer__brand {
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--ink);
  margin-bottom: 0.5rem;
}

.footer__text {
  font-size: 0.9rem;
  color: var(--ink-muted);
  margin-bottom: 1.5rem;
}

.footer__copy {
  font-size: 0.8rem;
  color: var(--ink-faint);
}

/* =============================================
   FAB
   ============================================= */
.fab {
  position: fixed;
  right: 1.25rem;
  bottom: 1.25rem;
  z-index: 90;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px; height: 60px;
  background: var(--wa-green);
  color: #fff;
  border-radius: 50%;
  box-shadow: 0 6px 28px rgba(34,197,94,0.45);
  transition: transform var(--dur-fast) var(--ease-spring), box-shadow var(--dur-fast) ease;
}

.fab:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 36px rgba(34,197,94,0.55);
}

.fab__pulse {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px solid var(--wa-green);
  animation: fab-pulse 2.5s ease-out infinite;
  pointer-events: none;
}

@keyframes fab-pulse {
  0%   { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(1.55); opacity: 0; }
}

/* =============================================
   LIGHTBOX
   ============================================= */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  gap: 1rem;
}

.lightbox[hidden] { display: none; }

.lightbox__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.9);
  backdrop-filter: blur(8px);
  cursor: pointer;
}

.lightbox__close {
  position: absolute;
  top: 1rem; right: 1rem;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px; height: 44px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.15);
  color: #fff;
  cursor: pointer;
  transition: background var(--dur-fast);
}

.lightbox__close:hover { background: rgba(255,255,255,0.18); }

.lightbox__img {
  position: relative;
  z-index: 1;
  max-width: 90vw;
  max-height: 80vh;
  border-radius: var(--radius);
  box-shadow: 0 24px 80px rgba(0,0,0,0.7);
  object-fit: contain;
  animation: lightbox-in 0.3s var(--ease-out) both;
}

.lightbox__caption {
  position: relative;
  z-index: 1;
  font-size: 0.9rem;
  color: rgba(255,255,255,0.65);
  text-align: center;
}

@keyframes lightbox-in {
  from { opacity: 0; transform: scale(0.9); }
  to   { opacity: 1; transform: scale(1); }
}

/* =============================================
   ANIMATIONS
   ============================================= */
@keyframes fade-up {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* =============================================
   REDUCED MOTION
   ============================================= */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
  html { scroll-behavior: auto; }
  .reveal { opacity: 1; transform: none; }
}
