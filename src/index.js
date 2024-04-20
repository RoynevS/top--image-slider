import "./styles/style.css";

function screenControl() {
  const slides = document.querySelectorAll(".slide");
  const navButtons = document.querySelectorAll(".nav-btn");
  const prevBtn = document.querySelector(".previous");
  const nextBtn = document.querySelector(".next");

  let activeSlideIndex = 0;
  let intervallID = null;

  const initialLoad = () => {
    if (slides.length > 0) displaySlide(activeSlideIndex);
  };

  const displaySlide = (index) => {
    slides.forEach((slide) => slide.classList.remove("active-slide"));
    navButtons.forEach((button) => button.classList.remove("active-btn"));
    slides[index].classList.add("active-slide");
    navButtons[index].classList.add("active-btn");
    intervallID = setInterval(nextSlide, 5000);
  };

  const nextSlide = () => {
    clearInterval(intervallID);
    activeSlideIndex++;
    if (activeSlideIndex >= slides.length) activeSlideIndex = 0;
    displaySlide(activeSlideIndex);
  };

  const previousSlide = () => {
    clearInterval(intervallID);
    activeSlideIndex--;
    if (activeSlideIndex < 0) activeSlideIndex = slides.length - 1;
    displaySlide(activeSlideIndex);
  };

  const navBtnhandler = (event) => {
    clearInterval(intervallID);
    const index = Number(event.target.classList[1].split("-")[1]) - 1;
    activeSlideIndex = index;
    displaySlide(activeSlideIndex);
  };

  prevBtn.addEventListener("click", previousSlide);
  nextBtn.addEventListener("click", nextSlide);
  navButtons.forEach((button) =>
    button.addEventListener("click", navBtnhandler)
  );

  initialLoad();
}

document.addEventListener("DOMContentLoaded", screenControl);
