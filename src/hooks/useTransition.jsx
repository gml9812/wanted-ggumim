import { useRef } from 'react';

export function useTransition({
  property = '-webkit-transform',
  duration = 1000,
  timingFunction = 'ease',
  delay = 0,
}) {
  const slideRef = useRef(null);

  const transitionOn = () => {
    slideRef.current.style.transition = `${property} ${duration}ms ${timingFunction} ${delay}s`;
  };

  const transitionOff = () => {
    slideRef.current.style.transition = '';
  };

  return [slideRef, transitionOn, transitionOff];
}
