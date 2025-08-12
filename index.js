const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");

function openNav() {
  // Remove the 'collapsed' class to make the sidebar and main content expand
  sidebar.classList.remove("collapsed");
  main.classList.remove("collapsed");
}

function closeNav() {
  // Add the 'collapsed' class to make the sidebar and main content shrink
  sidebar.classList.add("collapsed");
  main.classList.add("collapsed");
}