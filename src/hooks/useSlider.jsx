import { useState, useEffect } from 'react';
import { IMAGE_SLIDER } from 'constants';

export function useSlider({
  transformTarget,
  transitionOn,
  transitionOff,
  sliderPosition,
  sliderLength,
  numberOfSlidesShown,
}) {
  const [currentSlide, setCurrentSlide] = useState(sliderPosition);

  useEffect(() => {
    transformTarget(-(currentSlide * IMAGE_SLIDER.DRAG.UNIT_SWIPE));
  }, [currentSlide]);

  const maxSliderPos = sliderLength - (numberOfSlidesShown - 1);
  let swipeStartPos = 0;

  const handleDragStart = (e) => {
    const img = new Image();
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
    e.dataTransfer.setDragImage(img, 0, 0);

    transitionOff();
    swipeStartPos = e.pageX;
  };

  const handleDragMove = (e) => {
    const swipeLength = (e.pageX - swipeStartPos) / 2;
    transformTarget(swipeLength - currentSlide * IMAGE_SLIDER.DRAG.UNIT_SWIPE);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnd = (e) => {
    const swipeLength = e.pageX - swipeStartPos;
    const threshold = IMAGE_SLIDER.DRAG.THRESHOLD;

    const moveOneSlide = Math.abs(swipeLength % IMAGE_SLIDER.DRAG.UNIT_SWIPE) > threshold ? 1 : 0;

    const sliderChange =
      Math.floor(Math.abs(swipeLength / IMAGE_SLIDER.DRAG.UNIT_SWIPE)) + moveOneSlide;

    transitionOn();

    if (swipeLength < -threshold && currentSlide < maxSliderPos) {
      setCurrentSlide((c) => Math.min(c + sliderChange, maxSliderPos));
    } else if (swipeLength > threshold && currentSlide > 0) {
      setCurrentSlide((c) => Math.max(c - sliderChange, 0));
    } else {
      transformTarget(-(currentSlide * IMAGE_SLIDER.DRAG.UNIT_SWIPE));
    }
  };
  return [handleDragStart, handleDragMove, handleDragOver, handleDragEnd];
}
