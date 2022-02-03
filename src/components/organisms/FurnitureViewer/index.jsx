import React from 'react';
import { PropTypes } from 'prop-types';
import { FurnitureInfo } from 'components';

import * as S from './style';

export function FurnitureViewer({ furnitureList, furnitureFocused, onClick, backGroundImage }) {
  return (
    <S.Container>
      <S.BackGroundImage src={backGroundImage} onClick={() => onClick('')} />
      {furnitureList.map((furniture) => (
        <FurnitureInfo
          info={furniture}
          focused={furnitureFocused === furniture.productId}
          onClick={onClick}
        />
      ))}
    </S.Container>
  );
}

FurnitureViewer.propTypes = {
  furnitureList: PropTypes.arrayOf(PropTypes.object).isRequired,
  furnitureFocused: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  backGroundImage: PropTypes.string.isRequired,
};
