document.addEventListener("DOMContentLoaded", function () {
  // Tab switching functionality
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => {
        btn.classList.remove("active");
        btn.classList.add("text-gray-600");
        btn.classList.remove("text-gray-800");
      });

      tabContents.forEach((content) => {
        content.classList.remove("active");
        content.style.display = "none";
      });

      // Add active class to clicked button and corresponding content
      button.classList.add("active");
      button.classList.add("text-gray-800");
      button.classList.remove("text-gray-600");

      const tabId = button.getAttribute("data-tab");
      const activeContent = document.getElementById(`${tabId}-tab`);
      activeContent.classList.add("active");
      activeContent.style.display = "block";

      // Add animation class
      activeContent.classList.add("fade-in");

      // Remove animation class after animation completes
      setTimeout(() => {
        activeContent.classList.remove("fade-in");
      }, 500);
    });
  });

  // Hover effects for movie cards on mobile
  const movieCards = document.querySelectorAll(".movie-card");

  if ("ontouchstart" in window) {
    movieCards.forEach((card) => {
      card.addEventListener("touchstart", function () {
        const playButton = this.querySelector(".play-button");
        const overlay = this.querySelector(".movie-overlay");

        if (playButton.style.opacity === "1") {
          playButton.style.opacity = "0";
          overlay.style.opacity = "0";
        } else {
          // Reset all cards first
          movieCards.forEach((c) => {
            c.querySelector(".play-button").style.opacity = "0";
            c.querySelector(".movie-overlay").style.opacity = "0";
          });

          // Then show for this card
          playButton.style.opacity = "1";
          overlay.style.opacity = "1";
        }
      });
    });
  }

  // Add smooth scrolling for carousel
  const carousels = document.querySelectorAll(".custom-scrollbar");

  carousels.forEach((carousel) => {
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener("mousedown", (e) => {
      isDown = true;
      carousel.style.cursor = "grabbing";
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener("mouseleave", () => {
      isDown = false;
      carousel.style.cursor = "grab";
    });

    carousel.addEventListener("mouseup", () => {
      isDown = false;
      carousel.style.cursor = "grab";
    });

    carousel.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed
      carousel.scrollLeft = scrollLeft - walk;
    });
  });
});
