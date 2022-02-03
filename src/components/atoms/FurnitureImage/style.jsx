import styled from 'styled-components';

export const Container = styled.div`
  flex-shrink: 0;
  position: relative;
  transition-property: transform;
  display: inline-flex;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  margin: 28px 6px;
  ${(props) =>
    props.focused
      ? `background: linear-gradient(163.54deg,#ff659e 8.22%,#f56b30 94.1%);
              margin: 26px 4px;
              padding: 2px;
              border-radius: 18px;`
      : ''}
`;

export const Slide = styled.div`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  --swiper-theme-color: #007aff;
  --swiper-navigation-size: 44px;
  line-height: 1.42857143;
  color: #333;
  -webkit-font-smoothing: antialiased;
  font-size: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Spoqa Han Sans Neo', sans-serif;
  cursor: pointer;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 106px;
  height: 106px;
  border-radius: 16px;
  border: 0.5px solid ${(props) => (props.focused ? 'white' : '#aaafb9')};
  user-select: none;
  background-image: url('${(props) => props.image}');
`;

export const DiscountBadge = styled.div`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  --swiper-theme-color: #007aff;
  --swiper-navigation-size: 44px;
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  user-select: none;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 5px;
  background-image: url('//cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png');
  width: 24px;
  height: 28px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  font-size: 11px;
  font-weight: bold;
  line-height: 25px;
  color: white;
  text-align: center;
  padding-left: 1px;
`;

export const PercentSign = styled.span`
  font-size: 8px;
`;
