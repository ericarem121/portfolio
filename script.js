document.addEventListener("DOMContentLoaded", function () {
  // Ensure the title element exists before running filterCategory
  if (document.getElementById("article-title")) {
    filterCategory("all"); // Load all articles by default
  }

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
