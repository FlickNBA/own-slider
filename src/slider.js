export const initializeSlider = () => {
  let mainSlider = document.querySelector("#container");
  let slides = document.querySelectorAll(".slide");
  console.log(slides);
  let sliderWidth = mainSlider.clientWidth;
  console.log(sliderWidth);

  let newSlider = document.createElement("div");
  newSlider.classList.add("slider");
  newSlider.style.width = `${slides.length}00%`;

  let sliderDots = document.createElement("div");
  sliderDots.classList.add("dots");
  sliderDots.innerHTML = "* * * * * *";

  mainSlider.appendChild(sliderDots);

  let sliderLeft = document.createElement("div");
  sliderLeft.classList.add("left");
  sliderLeft.innerHTML = "<";

  mainSlider.appendChild(sliderLeft);

  let sliderRight = document.createElement("div");
  sliderRight.classList.add("right");
  sliderRight.innerHTML = ">";

  mainSlider.appendChild(sliderRight);

  let sliderCaption = document.createElement("h3");
  sliderCaption.classList.add("caption");
  sliderCaption.innerHTML = "Picture of <b>Porsche GT3 RS</b>";

  mainSlider.appendChild(sliderCaption);

  //`Picture of <b>${slide.attributes["data-caption"].value}</b>`

  slides.forEach((slide) => {
    let newSlide = document.createElement("div");
    newSlide.classList.add("slide");
    newSlide.classList.add("invisible");

    let slideImage = document.createElement("img");
    slideImage.src = slide.attributes["data-image"].value;

    newSlide.appendChild(slideImage);

    newSlider.appendChild(newSlide);
  });

  mainSlider.appendChild(newSlider);
};
