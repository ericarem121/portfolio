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


  // Hide or show articles based on category
  let articles = document.querySelectorAll(".project-item");
  articles.forEach(article => {
    if (category === "all" || article.dataset.category === category) {
      article.style.display = "block";
    } else {
      article.style.display = "none";
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  const dropbtn = document.querySelector(".dropbtn");

  dropbtn.addEventListener("click", function () {
    dropdown.classList.toggle("show"); // Toggle the dropdown visibility
  });

  // Close dropdown if clicking outside
  document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("show");
    }
  });
});
