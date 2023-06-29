import { whereToChange } from "./whereToChange";

export const changeTo = (slider, index) => {
  let nextIndex = whereToChange(slider, index);
  console.log(nextIndex);

  console.log([...Array(slider.childNodes.length).keys()]);

  let sliderDots = document.querySelector(".dots");
  sliderDots.innerHTML = nextIndex;
};
