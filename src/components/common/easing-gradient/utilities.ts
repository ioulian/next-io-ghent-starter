import { easingCoordinates } from "easing-coordinates";
import Color from "colorjs.io";

export const createEasingGradient = (
  from: string,
  to: string,
  easing: string = "cubic-bezier(0.5, 0, 0.5, 1)",
  stops: number = 16
) => {
  const coordinates = easingCoordinates(easing, stops);
  return coordinates
    .map(
      ({ x, y }) =>
        `${Color.mix(from, to, y, {
          space: "lab",
          outputSpace: "srgb",
        })} ${Math.abs(x * 100).toFixed(2)}%`
    )
    .join(", ");
};
