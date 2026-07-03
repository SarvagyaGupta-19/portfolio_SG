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

// Scroll to top button
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
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  },
  { root: null, rootMargin: "0px", threshold: 0.05 }
);

const revealElements = document.querySelectorAll(".scroll-reveal");
revealElements.forEach((el) => revealObserver.observe(el));

// Initial check for elements already in viewport
setTimeout(() => {
  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add("revealed");
    }
  });
}, 100);

// Active section detection for bottom nav
const navItems = document.querySelectorAll("#bottom-nav .nav-item") as NodeListOf<HTMLElement>;
const sectionIds = ["hero", "about", "experience", "projects", "education"];

const updateActiveNav = () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  // If at the very bottom, highlight last section
  if (scrollY + windowHeight >= docHeight - 50) {
    navItems.forEach((item) => item.classList.remove("active"));
    const lastNav = document.querySelector(`#bottom-nav .nav-item[data-section="education"]`);
    lastNav?.classList.add("active");
    return;
  }

  // Find which section is most visible
  let activeId = "hero";
  
  // If we're near the top, hero is active
  if (scrollY < 100) {
    activeId = "hero";
  } else {
    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (section) {
        const sectionTop = section.offsetTop;
        // Section is considered "active" when we've scrolled past its top (minus offset)
        if (scrollY >= sectionTop - 200) {
          activeId = id;
        }
      }
    }
  }

  navItems.forEach((item) => {
    if (item.getAttribute("data-section") === activeId) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

window.addEventListener("scroll", updateActiveNav, { passive: true });
// Run on load
updateActiveNav();
