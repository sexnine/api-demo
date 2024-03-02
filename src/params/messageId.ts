import type { ParamMatcher } from "@sveltejs/kit";

export const match: ParamMatcher = (id: string) => !isNaN(parseInt(id));
