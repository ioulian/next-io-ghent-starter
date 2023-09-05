import { easings } from "@/utils/easings";

import { SmoothShadowOptionsType } from "./utilities";

export const presetDefault: SmoothShadowOptionsType = {
  color: "#000",
  startAlpha: 0.02,
  endAlpha: 0.1,
  startBlur: 8,
  endBlur: 13,
  layers: 5,
  x: 0,
  y: 22,
  alphaEasing: easings.easeInOutQuint,
  blurEasing: easings.easeInExpo,
  distanceEasing: easings.easeInExpo,
};
