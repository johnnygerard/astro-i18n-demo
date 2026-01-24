import type { LOCALES } from "~/constants/locales";
import type { ValueOf } from "~/utils/value-of";

export type Locale = ValueOf<typeof LOCALES>;
