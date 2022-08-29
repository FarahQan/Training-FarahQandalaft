const sidebarBtn = document.getElementById("sidebar-btn");
const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main-container");
const searchLargeScreen = document.getElementById("search-lg");
const searchSmallScreen = document.getElementById("search-sm");

const showSidebar = () => {
  if (screen.width > 600) {
    searchSmallScreen.className = "hide-side";
    searchLargeScreen.className = "search";
    if (sidebar.className == "hide-side") {
      sidebar.className = "show-side";
      main.style.width = "86vw";
    } else {
      sidebar.className = "hide-side";
      main.style.width = "100vw";
    }
  } else {
    if (sidebar.className == "hide-side") {
      sidebar.className = "show-side";
      main.style.width = "100vw";
    } else {
      sidebar.className = "hide-side";
      main.style.width = "100vw";
    }
  }
};

sidebarBtn.addEventListener("click", showSidebar);
