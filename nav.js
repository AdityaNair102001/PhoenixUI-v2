const hamburgerBrand = document.getElementById("hamburger-brand");
const navBrandName = document.getElementById("nav-brand-name");
const hamburgerBtn = document.getElementById("hamburger-btn");
const hamburger1 = document.getElementById("hamburger1");
const hamburger2 = document.getElementById("hamburger3");
const hamburger3 = document.getElementById("hamburger3");
const nav = document.getElementById("navigation");
const navCategories = document.getElementById("nav-categories");
const navOptions = document.getElementById("nav-options");
let navigationOpen = false;

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    nav.style.color = "white";
    nav.style.backgroundColor = "black";
    nav.style.justifyContent = "space-between";
    hamburgerBrand.style.position = "static";
    navCategories.style.position = "static";
    navCategories.style.color = "white";
    navCategories.style.visibility = "visible";
    navOptions.style.position = "static";
    navBrandName.style.zIndex = "0";
  } else {
    hamburgerBrand.style.position = "static";
    nav.style.backgroundPosition = "right";
    nav.style.justifyContent = "space-between";
    navBrandName.style.zIndex = "0";
    navCategories.style.visibility = "hidden";
    navCategories.style.color = "black";
    navCategories.style.position = "absolute";
    navCategories.style.right = "50rem";
    navOptions.style.position = "static";
    hamburger1.style.backgroundColor = "white";
    hamburger1.style.transform = "translateY(0) rotate(0)";
    hamburger3.style.backgroundColor = "white";
    hamburger3.style.transform = " translateY(0) rotate(0)";
    navBrandName.color = "black";
    navigationOpen = false;
  }
}

var x = window.matchMedia("(min-width: 40em)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

hamburgerBtn.addEventListener("click", () => {
  // console.log(nav);
  console.log(navCategories);
  if (navigationOpen === false) {
    hamburgerBrand.style.position = "absolute";
    hamburgerBrand.style.left = "0";
    navBrandName.style.zIndex = "-3";
    nav.style.backgroundPosition = "left";
    nav.style.justifyContent = "center";
    navCategories.style.visibility = "visible";
    navCategories.style.color = "black";
    navCategories.style.position = "static";
    navOptions.style.position = "absolute";
    navOptions.style.bottom = "999999rem";
    hamburger1.style.backgroundColor = "black";
    hamburger1.style.transform = "translateY(10px) rotate(40deg)";
    hamburger3.style.backgroundColor = "black";
    hamburger3.style.transform = " translateY(-10px) rotate(-40deg)";
    navBrandName.style.color = "white";
    navigationOpen = true;
  } else {
    hamburgerBrand.style.position = "static";
    nav.style.backgroundPosition = "right";
    nav.style.justifyContent = "space-between";
    navBrandName.style.zIndex = "0";
    navCategories.style.visibility = "hidden";
    navCategories.style.color = "black";
    navCategories.style.position = "absolute";
    navCategories.style.right = "50rem";
    navOptions.style.position = "static";
    hamburger1.style.backgroundColor = "white";
    hamburger1.style.transform = "translateY(0) rotate(0)";
    hamburger3.style.backgroundColor = "white";
    hamburger3.style.transform = " translateY(0) rotate(0)";
    navBrandName.color = "black";
    navigationOpen = false;
  }
});
