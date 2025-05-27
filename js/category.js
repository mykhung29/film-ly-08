// Toggle filter dropdown
function toggleFilter() {
  const dropdown = document.getElementById("filter-dropdown");
  const arrow = document.getElementById("filter-arrow");

  dropdown.classList.toggle("open");
  arrow.classList.toggle("rotate-180");
}

// Apply filters
function applyFilters() {
  const activeFilters = [];
  const checkboxes = document.querySelectorAll(".custom-checkbox:checked");

  checkboxes.forEach((checkbox) => {
    if (!checkbox.disabled) {
      activeFilters.push({
        value: checkbox.value,
        label: checkbox.nextElementSibling.textContent,
      });
    }
  });

  // Update active filters display
  updateActiveFilters(activeFilters);

  // Here you would typically make an API call with the filters
  console.log("Applied filters:", activeFilters);

  // Close the filter dropdown
  toggleFilter();
}

// Clear all filters
function clearFilters() {
  const checkboxes = document.querySelectorAll(".custom-checkbox:checked");
  checkboxes.forEach((checkbox) => {
    if (!checkbox.disabled) {
      checkbox.checked = false;
    }
  });

  // Reset sort dropdown
  document.querySelector("select").value = "newest";

  // Clear active filters display
  updateActiveFilters([]);
}

// Update active filters display
function updateActiveFilters(filters) {
  const container = document.getElementById("active-filters");
  container.innerHTML = "";

  filters.forEach((filter) => {
    const tag = document.createElement("span");
    tag.className = "filter-tag";
    tag.innerHTML = `
            ${filter.label}
            <button onclick="removeFilter('${filter.value}')" class="ml-1 hover:text-primary">
                <i class="fas fa-times text-xs"></i>
            </button>
        `;
    container.appendChild(tag);
  });
}

// Remove individual filter
function removeFilter(value) {
  const checkbox = document.querySelector(`.custom-checkbox[value="${value}"]`);
  if (checkbox) {
    checkbox.checked = false;
    applyFilters();
  }
}

// Toggle favorite
function toggleFavorite(event) {
  event.preventDefault();
  event.stopPropagation();

  const heartIcon = event.currentTarget.querySelector("i");
  if (heartIcon.classList.contains("far")) {
    heartIcon.classList.remove("far");
    heartIcon.classList.add("fas");
    heartIcon.style.color = "#F43F5E"; // Red color for liked
  } else {
    heartIcon.classList.remove("fas");
    heartIcon.classList.add("far");
    heartIcon.style.color = ""; // Reset to default
  }
}

// Handle checkbox changes
document.querySelectorAll(".custom-checkbox").forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    // Auto-apply filters when changed (optional)
    // applyFilters();
  });
});

// Pagination
document
  .querySelectorAll(".pagination-item:not(.disabled)")
  .forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all
      document.querySelectorAll(".pagination-item").forEach((btn) => {
        btn.classList.remove("active");
      });

      // Add active class to clicked
      this.classList.add("active");

      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

// Make tooltips stay visible when hovering over them
document.addEventListener("DOMContentLoaded", function () {
  const movieCards = document.querySelectorAll(".movie-card");

  movieCards.forEach((card) => {
    // Reset any inline styles that might be causing issues
    const tooltip = card.querySelector(".movie-tooltip");
    if (tooltip) {
      tooltip.style = "";
    }

    // Remove any existing event listeners by cloning and replacing elements
    if (tooltip) {
      const newTooltip = tooltip.cloneNode(true);
      tooltip.parentNode.replaceChild(newTooltip, tooltip);
    }

    const newCard = card.cloneNode(true);
    card.parentNode.replaceChild(newCard, card);
  });

  // Re-add event listeners to the favorite buttons after cloning
  document.querySelectorAll(".movie-tooltip button").forEach((button) => {
    button.addEventListener("click", function (event) {
      toggleFavorite(event);
    });
  });
});

// Toggle favorite
function toggleFavorite(event) {
  event.preventDefault();
  event.stopPropagation();

  const heartIcon = event.currentTarget.querySelector("i");
  if (heartIcon.classList.contains("far")) {
    heartIcon.classList.remove("far");
    heartIcon.classList.add("fas");
    heartIcon.style.color = "#F43F5E"; // Red color for liked
  } else {
    heartIcon.classList.remove("fas");
    heartIcon.classList.add("far");
    heartIcon.style.color = ""; // Reset to default
  }
}
