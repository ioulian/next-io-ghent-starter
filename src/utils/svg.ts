export const escapeSVG = (svg: string) =>
  `"data:image/svg+xml;charset=UTF-8,${svg}"`.replaceAll("#", "%23");
