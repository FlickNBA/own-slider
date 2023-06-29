import "./reset.css";
import "./main.css";
import { initializeSlider } from "./slider";
import { startAutoPlay, stopAutoPlay } from "./autoPlay";
import { initAP } from "./initAP";

let AP = true;

let newSlider = initializeSlider();

if (AP) initAP(newSlider, 2000);
