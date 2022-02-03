import React from 'react';
import { PropTypes } from 'prop-types';
import { putComma } from 'utils';

import * as S from './style';

export function FurnitureDescription({ info }) {
  return (
    <S.Container>
      <S.FurnitureName>{info.productName}</S.FurnitureName>
      <S.FurniturePrice>
        {info.outside ? (
          <>
            <S.ExpectedPrice>예상가</S.ExpectedPrice>
            <S.Discount>{putComma(info.priceDiscount)}</S.Discount>
          </>
        ) : (
          <S.Discount>
            <S.DiscountRate>{info.discountRate}%</S.DiscountRate>
            {putComma(info.priceDiscount)}
          </S.Discount>
        )}
      </S.FurniturePrice>
    </S.Container>
  );
}

FurnitureDescription.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  info: PropTypes.object.isRequired,
};
