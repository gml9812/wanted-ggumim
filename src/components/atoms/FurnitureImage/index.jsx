import React from 'react';
import { PropTypes } from 'prop-types';

import * as S from './style';

export function FurnitureImage({ info, focused, onClick }) {
  return (
    <S.Container focused={focused}>
      <S.Slide
        image={info.imageUrl}
        focused={focused}
        onClick={() => (focused ? onClick('') : onClick(info.productId))}
      >
        {info.discountRate > 0 && (
          <S.DiscountBadge>
            {info.discountRate}
            <S.PercentSign>%</S.PercentSign>
          </S.DiscountBadge>
        )}
      </S.Slide>
    </S.Container>
  );
}

FurnitureImage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  info: PropTypes.object.isRequired,
  focused: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
