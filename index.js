const headerPopBtn = document.getElementById("headerPop");
const headerSemantic = document.getElementById("header-semantic");
const toggleBtn = document.getElementById("toggleBtn");
const navItem = document.getElementById("nav-item");
let headerOpen = false;
toggleBtn.style.transform = "rotate(180deg)";
headerPopBtn.addEventListener("click", () => {
  if (headerOpen === false) {
    headerSemantic.style.display = "block";
    headerSemantic.style.height = "100vh";
    headerOpen = true;

    toggleBtn.style.transform = "rotate(0deg)";
  } else {
    headerSemantic.style.display = "none";
    headerSemantic.style.height = "0";
    headerOpen = false;
    toggleBtn.style.transform = "rotate(180deg)";
  }
});

navItem.addEventListener("click", () => {
  console.log("clicked");
  headerSemantic.style.display = "none";
  headerSemantic.style.height = "0";
  headerOpen = false;
  toggleBtn.style.transform = "rotate(180deg)";
});
