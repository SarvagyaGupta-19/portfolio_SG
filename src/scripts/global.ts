// Performance monitoring
if ("performance" in window && "PerformanceObserver" in window) {
  // Core Web Vitals monitoring
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      // console.log(`${entry.name}: ${entry.startTime}ms`);
    }
  });

  try {
    observer.observe({ entryTypes: ["paint", "largest-contentful-paint"] });
  } catch (e) {
    // Observer not supported
  }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const href = (this as HTMLAnchorElement).getAttribute("href");
    if (href) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });
});

// Scroll to top button functionality
const scrollToTopBtn = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 500) {
    scrollToTopBtn?.classList.add("visible");
  } else {
    scrollToTopBtn?.classList.remove("visible");
  }
});

scrollToTopBtn?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Scroll reveal animation
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.05,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
    }
  });
}, observerOptions);

// Observe all elements with scroll-reveal classes
const revealElements = document.querySelectorAll(
  ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale"
);
revealElements.forEach((el) => observer.observe(el));

// Trigger initial check for elements already in viewport
setTimeout(() => {
  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add("revealed");
    }
  });
}, 100);
