import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  position: absolute;
  cursor: pointer;
  top: ${(props) => props.fromTop}px;
  left: ${(props) => props.fromLeft}px;
  display: block;
`;

export const SearchPictogram = styled.img`
  aspect-ratio: auto 32 / 32;
  box-sizing: border-box;
  display: ${(props) => (props.focused ? 'block' : 'none')} !important;
  width: 32px;
  height: 32px;
`;
export const ClosePictogram = styled.img`
  aspect-ratio: auto 32 / 32;
  box-sizing: border-box;
  display: ${(props) => (props.focused ? 'none' : 'block')} !important;
  width: 32px;
  height: 32px;
`;

export const Tooltip = styled.span`
  box-sizing: border-box;
  z-index: 1000;
  display: ${(props) => (props.focused ? 'flex' : 'none')};
  align-items: center;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.95);
  width: 220px;
  height: 86px;
  padding: 8px 0 8px 8px;
  margin-top: 16px;
  border-radius: 7px;
  box-shadow: 3px 3px 8px 0 rgba(0, 0, 0, 0.2);
  font-size: 14px;
  color: #4a4a4a;
  left: -160px;
  top: unset;
  bottom: 52px;
  ${(props) =>
    props.atTop
      ? `top: 28px; 
      bottom: unset;`
      : `top: unset;
      bottom: 52px;`}

  ${(props) => (props.atRight ? `left: -160px;` : `left: -20px;`)}

  ::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 8px;
    background-image: url('https://cdn.ggumim.co.kr/storage/20211118152728RO3OXnhkrC.png');
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1100;

    ${(props) =>
      props.atTop
        ? `top: -8px; 
        left: 34px;`
        : `top: unset;
        bottom: -8px;
        transform: rotate(180deg);`}

    ${(props) => (props.atRight ? `left: unset; right:34px;` : `left: 34px; right:unset;`)}
  }
`;

export const TooltipImage = styled.div`
  flex-shrink: 0;
  width: 70px;
  height: 70px;
  margin-right: 8px;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  background-image: url('${(props) => props.image}');
`;

export const MoveIconWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  margin-top: auto;
  margin-right: 2px;
`;

export const MoveIcon = styled.img`
  width: 20px;
  aspect-ratio: auto 20 / 20;
  height: 20px;
`;
