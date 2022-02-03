import styled from 'styled-components';
import { STYLE } from 'constants';

export const Container = styled.div`
  line-height: 1.42857143;
  color: #333;
  font-family: 'Spoqa Han Sans';
  -webkit-font-smoothing: antialiased;
  font-size: 0;
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

export const BackGroundImage = styled.img`
  width: ${STYLE.VIEWER.BACKGROUND_IMAGE_WIDTH}px;
`;
