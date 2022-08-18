import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";

import { intervalAtom } from "./interval";

export const INITIAL_STATE: number = 0;

export const countAtom = atomWithReset<number>(INITIAL_STATE);
export const incrementAtom = atom(null, (_get, set, count: number) =>
  set(countAtom, count + _get(intervalAtom))
);
export const decrementAtom = atom(null, (_get, set, count: number) =>
  set(countAtom, count - _get(intervalAtom))
);
