document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript loaded");

  let titleElement = document.getElementById("article-title");

  if (!titleElement) {
    console.error("ERROR: #article-title NOT FOUND in HTML!");
    return; // Stop the script from running if the title is missing
  } else {
    console.log("SUCCESS: Found #article-title");
  }

  filterCategory("all");

  // Dropdown menu functionality
  const dropbtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropbtn.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdownContent.classList.toggle("show");
  });

  document.addEventListener("click", function (event) {
    if (!dropbtn.contains(event.target) && !dropdownContent.contains(event.target)) {
      dropdownContent.classList.remove("show");
    }
  });
});

function filterCategory(category) {
  console.log("Filtering category:", category);
  let title = document.getElementById("article-title");
  let articles = document.querySelectorAll(".project-item");

  if (!title) {
    console.error("ERROR: #article-title NOT FOUND when filtering!");
    return;
  }

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

  closeDropdown();
}

function closeDropdown() {
  const dropdownContent = document.querySelector(".dropdown-content");
  if (dropdownContent) {
    dropdownContent.classList.remove("show");
  }
}
