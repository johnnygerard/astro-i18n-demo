/**
 * Ensure all cases are handled in a switch statement.
 *
 * @example
 * ```ts
 * type Color = "red" | "green" | "blue";
 *
 * function getColorCode(color: Color): string {
 *   switch (color) {
 *     case "red":
 *       return "#FF0000";
 *     case "green":
 *       return "#00FF00";
 *     case "blue":
 *       return "#0000FF";
 *     default:
 *       // This will cause a compile-time error if a case is missing
 *       return exhaustiveCheck(color);
 *   }
 * }
 * ```
 */
export const exhaustiveCheck = (_: never): never => {
  throw new Error("TypeScript exhaustive check failed");
};
