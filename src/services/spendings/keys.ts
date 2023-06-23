import { QueryKey } from "@tanstack/react-query";

export const keyListSpending = (): QueryKey => [`spendings`];
export const keyGetSpending = (id: string): QueryKey => [`spending`, id];
