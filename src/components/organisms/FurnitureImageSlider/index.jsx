import React, { useRef } from 'react';
import { PropTypes } from 'prop-types';
import { FurnitureImage } from 'components/atoms/FurnitureImage';

import * as S from './style';

export function FurnitureImageSlider({ furnitureList, furnitureFocused, onClick }) {
  const slideRef = useRef(null);
  let sliderPos = 0;
  const maxSliderPos = furnitureList.length - 6;
  let swipeStartPos = 0;

  const transitionOn = () => {
    slideRef.current.style.transition = `-webkit-transform 1000ms ease 0s`;
  };

  const transitionOff = () => {
    slideRef.current.style.transition = '';
  };

  const handleDragStart = (e) => {
    const img = new Image();
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
    e.dataTransfer.setDragImage(img, 0, 0);

    transitionOff();
    swipeStartPos = e.pageX;
  };

  const handleDragMove = (e) => {
    const swipeLength = e.pageX - swipeStartPos;
    slideRef.current.style.transform = `translateX(${swipeLength - sliderPos * 118}px)`;
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnd = (e) => {
    const swipeLength = e.pageX - swipeStartPos;
    const threshold = (6 + 10 + 104) / 2;
    const sliderChange = Math.floor(swipeLength / 118);

    let translateLength = sliderPos * 118;

    transitionOn();
    // 이동은 무조건 slideSize 단위로 일어난다.

    if (swipeLength < -threshold && sliderPos < maxSliderPos) {
      sliderPos = Math.min(sliderPos - sliderChange, maxSliderPos);
      translateLength = sliderPos * 118;
    } else if (swipeLength > threshold && sliderPos > 0) {
      sliderPos = Math.max(sliderPos - sliderChange, 0);
      translateLength = sliderPos * 118;
    }
    slideRef.current.style.transform = `translateX(-${translateLength}px)`;
  };

  return (
    <S.Container>
      <S.SliderWrapper
        onDragStart={handleDragStart}
        onDrag={handleDragMove}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        ref={slideRef}
        draggable
      >
        {furnitureList.map((furniture) => (
          <FurnitureImage
            info={furniture}
            focused={furnitureFocused === furniture.productId}
            onClick={onClick}
          />
        ))}
      </S.SliderWrapper>
    </S.Container>
  );
}

FurnitureImageSlider.propTypes = {
  furnitureList: PropTypes.arrayOf(PropTypes.object).isRequired,
  furnitureFocused: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
