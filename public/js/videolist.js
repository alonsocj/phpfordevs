let sidebar = document.querySelector(".sidebar-videos");
let sidebarBtn = document.querySelector(".home-content");

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
