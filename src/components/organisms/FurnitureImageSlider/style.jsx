import styled from 'styled-components';
import { STYLE } from 'constants';

export const Container = styled.div`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  --swiper-theme-color: #007aff;
  --swiper-navigation-size: 44px;

  line-height: 1.42857143;
  color: #333;
  font-family: 'Spoqa Han Sans';
  -webkit-font-smoothing: antialiased;
  font-size: 0;
  box-sizing: border-box;
  margin: 0;
  touch-action: pan-y;
  background-color: #fff;
  padding: 0 10px;
  display: flex;
  align-items: center;
  overflow-y: hidden;
  overflow-x: auto;

  width: ${STYLE.IMAGE_SLIDER.WIDTH}px;
`;

export const SliderWrapper = styled.div`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  --swiper-theme-color: #007aff;
  --swiper-navigation-size: 44px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  -webkit-font-smoothing: antialiased;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
  font-family: 'Spoqa Han Sans Neo', sans-serif;
  align-items: center;
`;
