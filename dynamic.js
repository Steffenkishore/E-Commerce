function showSideMenu(sideMenuElement) {
  sideMenuElement.classList.add("animation-sidemenu");
  sideMenuElement.classList.toggle("show-side-menu");
}

function hideSideMenu(sideMenuElement) {
  sideMenuElement.classList.toggle("show-side-menu");
}

let hamMenu = document.getElementById("hamBarMenu");
let sideMenuElement = document.getElementById("sideMenu");
let closeIconElement = document.getElementById("closeContainer");

hamMenu.onclick = function () {
  showSideMenu(sideMenuElement);
};

closeIconElement.onclick = function () {
  hideSideMenu(sideMenuElement);
};
