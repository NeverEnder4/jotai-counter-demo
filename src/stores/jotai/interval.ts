import { atomWithReset } from "jotai/utils";

export const INITIAL_INTERVAL: number = 10;

export const intervalAtom = atomWithReset<number>(INITIAL_INTERVAL);
