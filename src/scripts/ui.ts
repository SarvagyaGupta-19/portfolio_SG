// Header scroll effect with performance optimization
export function initHeader() {
    let lastScroll = 0;
    let ticking = false;
    const header = document.getElementById("header");
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileMenuClose = document.getElementById("mobile-menu-close");
    const overlay = document.querySelector(".mobile-menu-overlay");

    function toggleMenu(show: boolean) {
        if (show) {
            mobileMenu?.classList.remove("hidden");
            mobileMenuBtn?.classList.add("active");
            document.body.classList.add("overflow-hidden");
        } else {
            mobileMenu?.classList.add("closing");
            setTimeout(() => {
                mobileMenu?.classList.add("hidden");
                mobileMenu?.classList.remove("closing");
            }, 300);
            mobileMenuBtn?.classList.remove("active");
            document.body.classList.remove("overflow-hidden");
        }
    }

    // Mobile menu toggle
    mobileMenuBtn?.addEventListener("click", () => {
        const isOpen = !mobileMenu?.classList.contains("hidden");
        toggleMenu(!isOpen);
    });

    // Close button
    mobileMenuClose?.addEventListener("click", (e) => {
        e.preventDefault();
        toggleMenu(false);
    });

    // Close mobile menu when clicking overlay
    overlay?.addEventListener("click", () => {
        toggleMenu(false);
    });

    // Close mobile menu when clicking a navigation link
    document.querySelectorAll(".mobile-nav-link").forEach((link) => {
        link.addEventListener("click", () => {
            toggleMenu(false);
        });
    });

    // Handle resume download button
    document.querySelector(".mobile-resume-button")?.addEventListener("click", () => {
        setTimeout(() => {
            toggleMenu(false);
        }, 100);
    });

    function updateHeader() {
        const currentScroll = window.pageYOffset;

        // Add background when scrolled
        if (currentScroll > 20) {
            header?.classList.add("header-scrolled");
        } else {
            header?.classList.remove("header-scrolled");
        }

        lastScroll = currentScroll;

        // Active section highlighting
        const sections = document.querySelectorAll("section, div[id]");
        const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

        sections.forEach((section) => {
            const htmlSection = section as HTMLElement;
            const sectionTop = htmlSection.offsetTop - 100;
            const sectionHeight = htmlSection.clientHeight;
            const sectionId = htmlSection.getAttribute("id");

            if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("data-section") === sectionId) {
                        link.classList.add("active");
                    }
                });
            }
        });

        ticking = false;
    }

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(updateHeader);
            ticking = true;
        }
    });
}
