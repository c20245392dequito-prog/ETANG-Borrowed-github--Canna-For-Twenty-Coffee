/* ==========================================================================
   Canna For Twenty Coffee - Interactive & Animation Script
   Stack: GSAP 3.13.0 + ScrollTrigger
   ========================================================================== */

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

let introTimeline;

document.addEventListener("DOMContentLoaded", () => {
  initDarkMode();
  initIntroAnimation();
  initScrollTriggerEffects();
  initReplayButton();
});

/* --------------------------------------------------------------------------
   B. DARK MODE TOGGLE & LOCALSTORAGE PERSISTENCE (B1, Stretch Bonus)
   -------------------------------------------------------------------------- */
function initDarkMode() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const darkIcon = document.getElementById("theme-toggle-dark-icon");
  const lightIcon = document.getElementById("theme-toggle-light-icon");

  // Read initial preference or default to light
  const storedTheme = localStorage.getItem("color-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
    document.documentElement.classList.add("dark");
    lightIcon.classList.remove("hidden");
  } else {
    document.documentElement.classList.remove("dark");
    darkIcon.classList.remove("hidden");
  }

  themeToggleBtn.addEventListener("click", () => {
    darkIcon.classList.toggle("hidden");
    lightIcon.classList.toggle("hidden");

    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  });
}

/* --------------------------------------------------------------------------
   D. GSAP PAGE-LOAD INTRO TIMELINE (D1, D2, D4)
   No transform conflicts with Tailwind CSS.
   -------------------------------------------------------------------------- */
function initIntroAnimation() {
  // D1: gsap.timeline with defaults object
  introTimeline = gsap.timeline({
    defaults: {
      duration: 0.7,
      // D2 Ease Comment: "power3.out" provides a natural deceleration for UI elements entering from offscreen.
      ease: "power3.out"
    }
  });

  introTimeline
    // Step 1: Header items slide down with stagger
    .from(".intro-logo, .intro-nav, .intro-action", {
      y: -25,
      opacity: 0,
      stagger: 0.08
    })
    // Step 2: Hero badge pops up with slight scale (D1 overlap using "-=0.4")
    .from(".hero-badge", {
      y: 15,
      opacity: 0,
      // D2 Ease Comment: "back.out(1.7)" creates a subtle elastic pop effect for badging.
      ease: "back.out(1.7)"
    }, "-=0.4")
    // Step 3: Hero Title fades up (D1 overlap using "<" to sync start)
    .from(".hero-title", {
      y: 30,
      opacity: 0
    }, "<+=0.1")
    // Step 4: Hero Tagline & CTAs fade in together
    .from(".hero-tagline, .hero-cta", {
      y: 20,
      opacity: 0,
      stagger: 0.15
    }, "-=0.3");
}

/* --------------------------------------------------------------------------
   D3. CLICK INTERACTION (Replay Intro)
   -------------------------------------------------------------------------- */
function initReplayButton() {
  const replayBtn = document.getElementById("replay-btn");
  if (replayBtn) {
    replayBtn.addEventListener("click", () => {
      introTimeline.restart();
    });
  }
}

/* --------------------------------------------------------------------------
   E. SCROLLTRIGGER INTERACTIONS & REDUCED MOTION GUARD (E1, E2, E3)
   -------------------------------------------------------------------------- */
function initScrollTriggerEffects() {
  // E3: Wrap ScrollTrigger effects in gsap.matchMedia() to respect reduced motion accessibility
  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    
    // E2: Scroll-linked progress bar using scrub and ease: "none"
    gsap.to("#scroll-progress", {
      scaleX: 1,
      // D2 Ease Comment: "none" ease is essential for scrubbed timelines to maintain 1:1 sync with scroll distance.
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    });

    // E1: Reveal sections below hero using gsap.utils.toArray loop
    const revealSections = gsap.utils.toArray(".reveal");
    revealSections.forEach((section) => {
      gsap.from(section, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        // D2 Ease Comment: "power2.out" creates smooth section entrances without lingering.
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    });

  });
}