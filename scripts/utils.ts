export const getErrorMessage = (
  message: string,
  prefix: string = "Error",
): string => `\x1b[41m\x1b[1m[${prefix}]\x1b[0m\x1b[1m ${message}\x1b[0m`;

export const getSimpleErrorMessage = (message: string): string =>
  `\x1b[31m${message}\x1b[0m`;

export const getSimpleSuccessMessage = (message: string): string =>
  `\x1b[32m${message}\x1b[0m`;
