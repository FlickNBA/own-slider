import { changeTo } from "./changeTo";

let AP;

export const startAutoPlay = (slider, interval) => {
  AP = setInterval(() => {
    changeTo(slider, "+1");
  }, interval);
};

export const stopAutoPlay = () => {
  clearInterval(AP);
};
