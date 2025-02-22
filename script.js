// Function to filter articles based on the selected category
function filterCategory(category) {
  let title = document.getElementById("article-title");
  let articles = document.querySelectorAll(".project-item");

  // Change title based on category
  const categoryTitles = {
    concert: "Concert Reviews",
    opinion: "Opinion Editorials",
    event: "Event Reviews",
    news: "News Articles",
    all: "All Articles",
  };
  title.textContent = categoryTitles[category] || "All Articles";

  // Show/hide articles based on the selected category
  articles.forEach(article => {
    if (category === "all" || article.dataset.category === category) {
      article.classList.add("show");
      article.style.display = "flex"; // Ensures it's visible
    } else {
      article.classList.remove("show");
      article.style.display = "none";
    }
  });
}

// Function to close the dropdown menu
function closeDropdown() {
  const dropdownContent = document.querySelector(".dropdown-content");
  if (dropdownContent) {
    dropdownContent.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const dropbtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");

  // Toggle dropdown menu
  dropbtn.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  });

  // Close dropdown if clicking outside
  document.addEventListener("click", function (event) {
    if (!dropbtn.contains(event.target)) {
      dropdownContent.style.display = "none";
    }
  });

  // Ensure all articles are visible on initial load
  filterCategory("all");
});
