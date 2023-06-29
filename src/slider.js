import { changeTo } from "./changeTo";

export const initializeSlider = () => {
  let mainSlider = document.querySelector("#container");
  let slides = document.querySelectorAll(".slide");
  mainSlider.innerHTML = "";

  let newSlider = document.createElement("div");
  newSlider.id = "slider";
  newSlider.dataset.slide = 0;

  let sliderDots = document.createElement("div");
  sliderDots.classList.add("dots");
  sliderDots.innerHTML = [...Array(slides.length).keys()].join(" - ").replace("0", "<b>0</b>");

  mainSlider.appendChild(sliderDots);

  let sliderLeft = document.createElement("div");
  sliderLeft.classList.add("left");
  sliderLeft.innerHTML = "<";

  sliderLeft.addEventListener("click", function () {
    changeTo(newSlider, "-1");
  });

  mainSlider.appendChild(sliderLeft);

  let sliderRight = document.createElement("div");
  sliderRight.classList.add("right");
  sliderRight.innerHTML = ">";

  sliderRight.addEventListener("click", function () {
    changeTo(newSlider, "+1");
  });

  mainSlider.appendChild(sliderRight);

  let sliderCaption = document.createElement("h3");
  sliderCaption.classList.add("caption");
  sliderCaption.innerHTML = `Picture of <b>${slides[0].dataset.caption}</b>`;

  mainSlider.appendChild(sliderCaption);

  //`Picture of <b>${slide.attributes["data-caption"].value}</b>`

  slides.forEach((slide, index) => {
    let newSlide = document.createElement("div");
    newSlide.classList.add("slide");
    newSlide.dataset.index = index;
    newSlide.dataset.caption = slide.dataset.caption;

    let slideImage = document.createElement("img");
    slideImage.src = slide.dataset.image;

    newSlide.appendChild(slideImage);
    newSlider.appendChild(newSlide);

    if (index != 0) newSlide.classList.add("invisible");
  });

  mainSlider.appendChild(newSlider);

  return newSlider;
};
