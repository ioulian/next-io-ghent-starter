// "Ported" from: https://smoothshadows.com/
import { easingCoordinates } from "easing-coordinates";
import Color from "colorjs.io";
import { parse, ColorSpace, sRGB } from "colorjs.io/fn";

ColorSpace.register(sRGB);

export interface SmoothShadowOptionsType {
  startAlpha: number;
  endAlpha: number;
  startBlur: number;
  endBlur: number;
  layers: number;
  x: number;
  y: number;
  color: string;
  alphaEasing: string;
  blurEasing: string;
  distanceEasing: string;
}

export const createSmoothShadow = ({
  startAlpha,
  endAlpha,
  startBlur,
  endBlur,
  layers,
  x,
  y,
  color,
  alphaEasing,
  blurEasing,
  distanceEasing,
}: SmoothShadowOptionsType): string => {
  const distanceCoordinates = easingCoordinates(distanceEasing, layers);
  const blurCoordinates = easingCoordinates(blurEasing, layers);
  const alphaCoordinates = easingCoordinates(alphaEasing, layers);
  const parsedColor = new Color(parse(color));
  const rgb: [number, number, number] = [
    Math.floor(parsedColor.srgb.r * 255),
    Math.floor(parsedColor.srgb.g * 255),
    Math.floor(parsedColor.srgb.b * 255),
  ];
  return Array(layers)
    .fill(0)
    .map((_, i) => ({
      x: distanceCoordinates[i].y * x,
      y: distanceCoordinates[i].y * y,
      blur: startBlur + blurCoordinates[i].y * (endBlur - startBlur),
      alpha: startAlpha + alphaCoordinates[i].y * (endAlpha - startAlpha),
    }))
    .map(
      ({ x, y, blur, alpha }) =>
        `${x.toFixed(1)}px ${y.toFixed(1)}px ${blur.toFixed(
          2,
        )}px rgba(${rgb.join(", ")}, ${alpha.toFixed(2)})`,
    )
    .join(", ");
};
