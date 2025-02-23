document.addEventListener("DOMContentLoaded", function () {
  // Ensure the function is available globally
  window.filterCategory = filterCategory;

  // Dropdown menu functionality
  const dropbtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");

  if (dropbtn && dropdownContent) {
    dropbtn.addEventListener("click", function (event) {
      event.stopPropagation();
      dropdownContent.classList.toggle("show");
    });
  
    document.addEventListener("click", function (event) {
      if (!dropbtn.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.classList.remove("show");
      }
    });
  }

  // Show all articles on initial load
  filterCategory("all");

  // Add event listener to reset filters when clicking the Journalism button
  const journalismButton = document.getElementById("journalism-button");
  if (journalismButton) {
    journalismButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior
      filterCategory("all");  // Reset filter to show all articles
      console.log("Journalism button clicked: Showing all articles");
    });
  }
});

function filterCategory(category) {
  let title = document.getElementById("article-title");
  if (!title) {
    console.warn("WARNING: filterCategory() called on the wrong page!");
    return;
  }

  console.log("Filtering category:", category);
  let articles = document.querySelectorAll(".project-item");
  const categoryTitles = {
    concert: "Concert Reviews",
    opinion: "Opinion Editorials",
    event: "Event Reviews",
    news: "News Articles",
    all: "All Articles",
  };

  title.textContent = categoryTitles[category] || "All Articles";

  articles.forEach(article => {
    if (category === "all" || article.dataset.category === category) {
      article.style.display = "flex";
    } else {
      article.style.display = "none";
    }
  });

  if (dropdownContent = document.querySelector(".dropdown-content")) {
    dropdownContent.classList.remove("show");
  }
}
