// Function to filter articles based on the selected category
function filterCategory(category) {
  let title = document.getElementById("article-title");
  
  // Update title based on category
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
  const dropdownContent = document.querySelector(".dropdown-content");
  if (dropdownContent) {
    dropdownContent.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const dropbtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropbtn.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdownContent.classList.toggle("show");
  });

  document.addEventListener("click", function (event) {
    if (!dropbtn.contains(event.target)) {
      dropdownContent.classList.remove("show");
    }
  });
});

