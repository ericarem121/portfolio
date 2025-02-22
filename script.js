document.addEventListener("DOMContentLoaded", function () {
  // Dropdown menu functionality
  const dropbtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropbtn.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdownContent.classList.toggle("show");
  });

  // Close dropdown if clicking outside
  document.addEventListener("click", function (event) {
    if (!dropbtn.contains(event.target) && !dropdownContent.contains(event.target)) {
      dropdownContent.classList.remove("show");
    }
  });

  // Ensure all articles are visible on initial load
  filterCategory("all");
});

// Function to filter articles based on selected category
function filterCategory(category) {
  let title = document.getElementById("article-title");
  let articles = document.querySelectorAll(".project-item");

  // Update section title based on category
  const categoryTitles = {
    concert: "Concert Reviews",
    opinion: "Opinion Editorials",
    event: "Event Reviews",
    news: "News Articles",
    all: "All Articles",
  };
  title.textContent = categoryTitles[category] || "All Articles";

  // Show/hide articles correctly
  articles.forEach(article => {
    if (category === "all" || article.dataset.category === category) {
      article.classList.add("show");
      article.style.display = "flex"; // Make sure they are visible
    } else {
      article.classList.remove("show");
      article.style.display = "none"; // Hide unselected articles
    }
  });

  // Close dropdown after selection
  closeDropdown();
}

// Function to close the dropdown menu
function closeDropdown() {
  const dropdownContent = document.querySelector(".dropdown-content");
  if (dropdownContent) {
    dropdownContent.classList.remove("show");
  }
}
