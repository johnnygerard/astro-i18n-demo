/**
 * Extract the union of all value types from an object type.
 *
 * @template T - The object type from which to extract value types.
 *
 * @example
 * ```ts
 * const COLORS = {
 *   RED: "red",
 *   GREEN: "green",
 *   BLUE: "blue",
 * } as const;
 *
 * type Color = ValueOf<typeof COLORS>; // "red" | "green" | "blue"
 * ```
 */
export type ValueOf<T> = T[keyof T];
