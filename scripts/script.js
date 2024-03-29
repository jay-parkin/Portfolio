function toggleMenu() {
  document.getElementById("menu-nav").classList.toggle("show");

  // Change the menu icon upon open/closed
  var menuText = document.getElementById("menu-text").textContent;
  // console.log("MENU " + menuText);
  if (menuText === "menu") {
    document.getElementById("menu-text").textContent = "menu_open";
  } else {
    document.getElementById("menu-text").textContent = "menu";
  }
}
