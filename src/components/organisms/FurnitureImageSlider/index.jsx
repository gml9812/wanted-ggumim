import React from 'react';
import { PropTypes } from 'prop-types';
import { FurnitureImage } from 'components/atoms/FurnitureImage';
import { useTransition, useSlider } from 'hooks';

import * as S from './style';

export function FurnitureImageSlider({ furnitureList, furnitureFocused, onClick }) {
  const [slideRef, transitionOn, transitionOff] = useTransition({
    property: '-webkit-transform',
    duration: 1000,
    timingFunction: 'ease',
    delay: 0,
  });
  const [handleDragStart, handleDragMove, handleDragOver, handleDragEnd] = useSlider({
    transformTarget: (target) => {
      slideRef.current.style.transform = `translateX(${target}px)`;
    },
    transitionOn,
    transitionOff,
    sliderPosition: 0,
    sliderLength: furnitureList.length,
    numberOfSlidesShown: 7,
  });

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
