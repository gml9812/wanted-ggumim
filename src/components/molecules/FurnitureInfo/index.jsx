import React from 'react';
import { PropTypes } from 'prop-types';
import { FurnitureDescription } from 'components';

import * as S from './style';

export function FurnitureInfo({ info, focused, onClick }) {
  const fromTop = info.pointX * 1.6;
  const fromLeft = info.pointY * 1.6;

  return (
    <S.Container fromTop={fromTop} fromLeft={fromLeft}>
      <S.SearchPictogram
        src="https://cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png"
        focused={focused}
        onClick={() => onClick('')}
      />
      <S.ClosePictogram
        src="https://cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png"
        focused={focused}
        onClick={() => onClick(info.productId)}
      />
      <S.Tooltip focused={focused} atTop={fromTop < 500} atRight={fromLeft > 400}>
        <S.TooltipImage image={info.imageUrl} />
        <FurnitureDescription info={info} />
        <S.MoveIconWrapper>
          <S.MoveIcon
            src="https://cdn.ggumim.co.kr/storage/20211102181936xqHzyWAmb8.png"
            alt="상품보기"
          />
        </S.MoveIconWrapper>
      </S.Tooltip>
    </S.Container>
  );
}

FurnitureInfo.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  info: PropTypes.object.isRequired,
  focused: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
