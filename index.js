const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");
const openBtn = document.getElementById("openbtn");

function toggleNav() {
  // classList.toggle will add 'collapsed' if it's not there,
  // and remove it if it is there.
  sidebar.classList.toggle("collapsed");
  main.classList.toggle("collapsed");
}

// --- Event Listeners ---
// Listen for a click on the hamburger button and run toggleNav
openBtn.addEventListener('click', toggleNav);
