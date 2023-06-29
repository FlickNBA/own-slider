import { startAutoPlay, stopAutoPlay } from "./autoPlay";

export const initAP = (slider, interval) => {
  startAutoPlay(slider, interval);
  document.querySelector("#S").addEventListener("click", function () {
    if (this.classList == "green") {
      this.classList.remove("green");
      this.classList.add("red");
      this.innerHTML = "stopped";
      stopAutoPlay(slider);
    } else {
      this.classList.remove("red");
      this.classList.add("green");
      this.innerHTML = "started";
      startAutoPlay(slider, interval);
    }
  });
};
