// Stacked Cards Interaction Logic - Click Only, No Hover Movement
export function initStackedCards() {
    const container = document.getElementById("stackedCardsContainer");
    const cards = document.querySelectorAll(".skill-card-stacked");
    const dots = document.querySelectorAll(".skill-nav-dot");

    if (!container || cards.length === 0) return;

    let currentIndex = 0;
    let isAnimating = false;

    // Function to update card positions and styles smoothly
    function updateCards(newIndex: number) {
        if (isAnimating || newIndex === currentIndex) return;
        isAnimating = true;

        currentIndex = newIndex;

        // Use requestAnimationFrame for smooth animations
        requestAnimationFrame(() => {
            cards.forEach((card, index) => {
                const htmlCard = card as HTMLElement;
                const relativeIndex = (index - currentIndex + cards.length) % cards.length;

                // Calculate position in stack with smooth easing - only show top card
                const zIndex = cards.length - relativeIndex;
                const translateY = relativeIndex * 8;
                const scale = Math.max(0.95, 1 - relativeIndex * 0.02);
                const rotateX = relativeIndex * 1;
                const opacity = relativeIndex === 0 ? 1 : 0;
                const visibility = relativeIndex === 0 ? "visible" : "hidden";

                // Apply transformations with will-change for performance
                htmlCard.style.willChange = "transform, opacity, z-index, visibility";
                htmlCard.style.zIndex = zIndex.toString();
                htmlCard.style.transform = `translateY(${translateY}px) scale(${scale}) rotateX(${rotateX}deg)`;
                htmlCard.style.opacity = opacity.toString();
                htmlCard.style.visibility = visibility;
                htmlCard.style.pointerEvents = relativeIndex === 0 ? "auto" : "none";

                // Top card is clickable, others are not
                if (relativeIndex === 0) {
                    htmlCard.setAttribute(
                        "aria-label",
                        `Current card: ${htmlCard.querySelector("h3")?.textContent}. Click to see next category.`
                    );
                } else {
                    htmlCard.removeAttribute("aria-label");
                }

                // Remove will-change after animation completes
                setTimeout(() => {
                    htmlCard.style.willChange = "auto";
                }, 700);
            });

            // Update navigation dots with smooth animation
            dots.forEach((dot, index) => {
                const htmlDot = dot as HTMLElement;
                if (index === currentIndex) {
                    htmlDot.style.background = "linear-gradient(135deg, #4285f4, #ea4335)";
                    htmlDot.style.width = "2rem";
                    htmlDot.style.transform = "scale(1)";
                    htmlDot.setAttribute("aria-label", `Current category ${index + 1}`);
                } else {
                    htmlDot.style.background = "#d1d5db";
                    htmlDot.style.width = "0.75rem";
                    htmlDot.style.transform = "scale(1)";
                    htmlDot.setAttribute("aria-label", `Go to category ${index + 1}`);
                }
            });
        });

        // Reset animation lock after transition completes
        setTimeout(() => {
            isAnimating = false;
        }, 750);
    }

    // Click handler for cards - ONLY responds to clicks, not hover
    cards.forEach((card, index) => {
        const htmlCard = card as HTMLElement;

        // Click event - moves card to back
        htmlCard.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();

            const relativeIndex = (index - currentIndex + cards.length) % cards.length;

            // Only allow clicking the top card (relativeIndex === 0)
            if (relativeIndex === 0 && !isAnimating) {
                const nextIndex = (currentIndex + 1) % cards.length;
                updateCards(nextIndex);
            }
        });

        // Prevent any drag or touch behaviors that might interfere
        htmlCard.addEventListener("dragstart", (e) => e.preventDefault());
        htmlCard.addEventListener(
            "touchmove",
            (e) => {
                // Prevent scrolling while touching cards
                if (card.matches(":hover")) {
                    e.preventDefault();
                }
            },
            { passive: false }
        );
    });

    // Click handler for navigation dots
    dots.forEach((dot, index) => {
        dot.addEventListener("click", (e) => {
            e.preventDefault();
            if (!isAnimating) {
                updateCards(index);
            }
        });
    });

    // Keyboard navigation for accessibility
    let isKeyboardNavigating = false;
    document.addEventListener("keydown", (e) => {
        // Only handle keyboard navigation if not already animating
        if (isAnimating || isKeyboardNavigating) return;

        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
            e.preventDefault();
            isKeyboardNavigating = true;
            const nextIndex = (currentIndex + 1) % cards.length;
            updateCards(nextIndex);
            setTimeout(() => {
                isKeyboardNavigating = false;
            }, 750);
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
            e.preventDefault();
            isKeyboardNavigating = true;
            const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
            updateCards(prevIndex);
            setTimeout(() => {
                isKeyboardNavigating = false;
            }, 750);
        }
    });

    // Initialize ARIA attributes
    cards.forEach((card, index) => {
        const htmlCard = card as HTMLElement;
        htmlCard.setAttribute("role", "button");
        htmlCard.setAttribute("tabindex", index === 0 ? "0" : "-1");
    });
}
