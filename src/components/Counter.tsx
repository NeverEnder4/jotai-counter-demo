import React, { useRef, useEffect, useState } from "react";
import { useCountUp } from "react-countup";

import { formatNumber, NUMBER_FORMAT_STRINGS } from "../lib/numeral";
import { useCounter } from "../hooks/useCounter";
import "./Counter.css";

const INITIAL_COUNT: number = 0;
const INITIAL_INTERVAL: number = 10;

export const Counter = (): React.ReactElement => {
  const countUpRef = useRef(null);

  const { count, increment, decrement, resetCount, setInterval, interval, resetInterval } =
    useCounter(INITIAL_COUNT, INITIAL_INTERVAL);

  const { update } = useCountUp({
    ref: countUpRef,
    end: count,
    delay: 200,
    duration: 0.3,
    startOnMount: false,
    formattingFn: (number: number): string => {
      return formatNumber(number, NUMBER_FORMAT_STRINGS.counter);
    },
  });

  useEffect(() => {
    update(count);
  }, [count]);

  const handleDecrement = (): void => {
    decrement(count);
  };

  const handleIncrement = (): void => {
    increment(count);
  };

  const handleResetCount = (): void => {
    resetCount();
  };

  const handleResetInterval = (): void => {
    resetInterval();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setInterval(value);
  };

  return (
    <div className='counter'>
      <h1 ref={countUpRef} className='counter__title'>
        <span>JOTAI</span>
        <span>COUNTER</span>
      </h1>
      <p ref={countUpRef} className='counter__count'>
        {count}
      </p>
      <div className='counter__controls-layout'>
        <div className='counter__upper-controls'>
          <label className='counter__input-label'>
            Select interval
            <div className='counter__input-container'>
              <input
                name='interval'
                onChange={handleChange}
                value={interval}
                step={1}
                min={0}
                max={1000}
                className='counter__input'
                type='number'
              />
              <button
                type='button'
                onClick={handleResetInterval}
                className='counter__reset-interval'
              >
                Reset
              </button>
            </div>
          </label>
        </div>
        <div className='counter__lower-controls'>
          <button className='counter__button' onClick={handleDecrement}>
            Decrement
          </button>
          <button className='counter__button' onClick={handleResetCount}>
            Zero
          </button>
          <button className='counter__button' onClick={handleIncrement}>
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};
