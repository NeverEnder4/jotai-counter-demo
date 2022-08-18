import { useEffect } from "react";
import { useAtom } from "jotai";
import { useResetAtom } from "jotai/utils";

import { countAtom, incrementAtom, decrementAtom, INITIAL_STATE } from "../stores/jotai/count";
import { intervalAtom, INITIAL_INTERVAL } from "../stores/jotai/interval";

export const useCounter = (
  initialCount: number = INITIAL_STATE,
  initialInterval: number = INITIAL_INTERVAL
) => {
  // Count Atoms
  const [count, setCount] = useAtom(countAtom);
  const [, decrement] = useAtom(decrementAtom);
  const [, increment] = useAtom(incrementAtom);
  const resetCount = useResetAtom(countAtom);

  // Interval Atoms
  const [interval, setInterval] = useAtom(intervalAtom);
  const resetInterval = useResetAtom(intervalAtom);

  // Set initial count or interval once if the number differes from the default initial state
  useEffect(() => {
    if (initialCount !== INITIAL_STATE) setCount(initialCount);
    if (initialInterval !== INITIAL_INTERVAL) setInterval(initialInterval);
  }, []);

  return { count, decrement, increment, resetCount, setInterval, interval, resetInterval };
};
