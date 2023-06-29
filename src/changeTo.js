import { whereToChange } from "./whereToChange";

export const changeTo = (slider, index) => {
  let nextIndex = whereToChange(slider, index);
  let sliderDots = document.querySelector(".dots");
  let sliderCaption = document.querySelector(".caption");

  sliderDots.innerHTML = [...Array(slider.childNodes.length).keys()].join(" - ").replace(nextIndex, `<b>${nextIndex}</b>`);

  let currentSlide = document.querySelector(`[data-index="${slider.dataset.slide}"]`);
  currentSlide.classList.add("invisible");

  let nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
  nextSlide.classList.remove("invisible");

  sliderCaption.innerHTML = `Picture of <b>${nextSlide.dataset.caption}</b>`;

  slider.dataset.slide = nextIndex;
};
