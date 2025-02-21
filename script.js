// Function to filter articles based on the selected category
function filterCategory(category) {
  let title = document.getElementById("article-title");
  
  switch (category) {
    case "concert":
      title.textContent = "Concert Reviews";
      break;
    case "opinion":
      title.textContent = "Opinion Editorials";
      break;
    case "event":
      title.textContent = "Event Reviews";
      break;
    case "news":
      title.textContent = "News Articles";
      break;
    default:
      title.textContent = "All Articles";
  }

  // Show or hide articles based on the selected category
  let articles = document.querySelectorAll(".project-item");
  articles.forEach(article => {
    if (category === "all" || article.dataset.category === category) {
      article.style.display = "flex";
    } else {
      article.style.display = "none";
    }
  });
}

// Function to close the dropdown menu
function closeDropdown() {
  const dropdown = document.querySelector(".dropdown");
  dropdown.classList.remove("show");
}

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  const dropbtn = document.querySelector(".dropbtn");

  dropbtn.addEventListener("click", function (event) {
    // Prevent the click event from bubbling up to the document
    event.stopPropagation();
    dropdown.classList.toggle("show");
  });

  // Close the dropdown if clicking outside of it
  document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("show");
    }
  });
});
