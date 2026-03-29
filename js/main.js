/* ===================================
   Main JavaScript - Café Aroma
   =================================== */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initScrollEffects();
  initSmoothScroll();
});

/**
 * Initialize Mobile Menu Functionality
 * Handles drawer animation and overlay interactions
 */
function initMobileMenu() {
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!mobileMenuToggle || !navMenu || !drawerOverlay) return;

  // Toggle menu on button click
  mobileMenuToggle.addEventListener('click', () => {
    toggleMenu();
  });

  // Close menu on overlay click
  drawerOverlay.addEventListener('click', () => {
    closeMenu();
  });

  // Close menu on nav link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        closeMenu();
      }
    });
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      closeMenu();
    }
  });

  function toggleMenu() {
    const isActive = navMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
    drawerOverlay.classList.toggle('active');

    // Prevent body scroll when menu is open
    document.body.style.overflow = isActive ? 'hidden' : '';

    // Update ARIA attributes for accessibility
    mobileMenuToggle.setAttribute('aria-expanded', isActive);
  }

  function closeMenu() {
    navMenu.classList.remove('active');
    mobileMenuToggle.classList.remove('active');
    drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
  }
}

/**
 * Initialize Scroll Effects
 * Handles fade-in animations and navbar blur effect
 */
function initScrollEffects() {
  const fadeElements = document.querySelectorAll('.fade-in-element');
  const navbar = document.getElementById('navbar');

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: stop observing after animation
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(element => {
    observer.observe(element);
  });

  // Navbar scroll effect
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (!navbar) return;

    // Add shadow when scrolled
    if (currentScrollY > 50) {
      navbar.style.boxShadow = 'var(--shadow-lg)';
    } else {
      navbar.style.boxShadow = 'var(--shadow-md)';
    }

    lastScrollY = currentScrollY;
  }, { passive: true });
}

/**
 * Initialize Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');

      // Skip if it's just "#"
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();

        // Calculate offset for fixed navbar
        const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
        const targetPosition = targetElement.offsetTop - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Debounce function to limit rate of function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait = 100) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function to limit rate of function calls
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
function throttle(func, limit = 100) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
