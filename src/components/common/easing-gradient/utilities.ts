import { easingCoordinates } from "easing-coordinates";
import { mix, parse, ColorSpace, sRGB, Lab, serialize } from "colorjs.io/fn";

// If you want to use more color spaces, you'll need to register them first
ColorSpace.register(sRGB);
ColorSpace.register(Lab);

// Some info: https://non-boring-gradients.netlify.app/
// "Ported" from https://github.com/larsenwork/postcss-easing-gradients
export const createEasingGradient = (
  from: string,
  to: string,
  easing: string = "cubic-bezier(0.5, 0, 0.5, 1)",
  stops: number = 16,
) => {
  const coordinates = easingCoordinates(easing, stops);

  // TS ignore is there because the types for serialize are not correct. This works.
  return coordinates
    .map(
      ({ x, y }) =>
        `${serialize(
          mix(parse(from), parse(to), y, {
            space: "lab",
            outputSpace: "srgb",
          }),
        )} ${Math.abs(x * 100).toFixed(2)}%`,
    )
    .join(", ");
};
