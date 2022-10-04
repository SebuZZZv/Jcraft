const hamburger_button = document.querySelector(".hamburger-button");
const navbar_mobile = document.querySelector(".mobile-nav");
const navbar_desktop = document.querySelector(".nav");
const mobile_menu = document.querySelector(".mobile-menu");

function checksize () {
  let screen_width = window.innerWidth;
    if (screen_width > 900) {
      navbar_mobile.style.display = "none";
      navbar_desktop.style.display = "block";
      
    } else {
      navbar_mobile.style.display = "block";
      navbar_desktop.style.display = "none";
      
    }
  }

  checksize()

function displayResizing() {
    checksize()
}

  window.addEventListener("resize", displayResizing);
   
hamburger_button.addEventListener("click", () => {
  console.log(navbar_mobile.className);
  if (hamburger_button.className === "hamburger-button clicked") {
    hamburger_button.classList.remove("clicked");
    mobile_menu.style.display = "none";
  } else {
    hamburger_button.classList.add("clicked");
    mobile_menu.style.display = "block";
    mobile_menu.style.visibility = "visible";
  }
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}