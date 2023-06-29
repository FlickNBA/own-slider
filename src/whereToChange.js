export const whereToChange = (slider, modifier) => {
  let currentSlide = slider.dataset.slide;
  let slidesCount = slider.childNodes.length - 1;
  let nextMath = Number(currentSlide) + Number(modifier);
  return nextMath > slidesCount ? 0 : nextMath == -1 ? slidesCount : nextMath;
};
