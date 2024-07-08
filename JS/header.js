const searchInput = document.getElementById("search");
const search = document.querySelector(".search");
const searchIcon = document.getElementById("search-icon");
let isShrunk = false;

function shrink() {
  if (!isShrunk) {
    searchInput.style.transform = "scaleX(0)";
    isShrunk = true;
  } else {
    searchInput.style.transform = "scaleX(1)";
    isShrunk = false;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var elementsToShow = document.querySelectorAll(".animate-on-load");

  // Function to check if an element is in the viewport
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    return (
      rect.top >= 0 && rect.left >= 0 && rect.top <= windowHeight * 0.9 // Adjust this value as needed (e.g., 0.2 for 20% visibility)
    );
  }

  // Function to add the fade-in class to elements when they come into view
  function showElements() {
    for (var i = 0; i < elementsToShow.length; i++) {
      if (isInViewport(elementsToShow[i])) {
        elementsToShow[i].classList.add("fade-in");
      }
    }
  }

  // Initial check when the page is loaded
  showElements();

  // Check when scrolling or resizing the window
  window.addEventListener("scroll", showElements);
  window.addEventListener("resize", showElements);
});

document.addEventListener("DOMContentLoaded", function () {
  var elements = document.querySelectorAll(".floating-animation");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("float");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  var elements = document.querySelectorAll(".floating-animation-inverse");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("float-inverse");
  }
});

// For bar

const menuButton = document.querySelector(".bar");
const navLinks = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("cross");

  if (menuButton.classList.contains("cross")) {
    navLinks.style.bottom = "0";
  } else {
    navLinks.style.bottom = "1200px";
  }
});



const logoDiv = document.querySelector(".logo");
const img = document.createElement("img");

img.src = "ASSETS/Logos/main-logo.png";
img.alt = "Company Fitness LOGO GYM";
img.width = 300;


// Append the image element to the .logo div
logoDiv.appendChild(img);
