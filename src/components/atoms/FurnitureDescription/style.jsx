import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-bottom: 2px;
  overflow: hidden;
  text-align: left;
`;

export const FurnitureName = styled.div`
  width: 100%;
  color: #333c45;
  text-overflow: ellipsis;
  line-height: 1.3em;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: initial;
`;

export const FurniturePrice = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

export const ExpectedPrice = styled.div`
  color: #898f94;
  font-size: 11px;
  font-weight: bold;
  margin-right: 4px;
  line-height: 1.2em !important;
`;

export const Discount = styled.div`
  display: flex;
  align-items: center;
  color: #181d1f;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.2em !important;
`;

export const DiscountRate = styled.div`
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  box-sizing: border-box;
  line-height: 1.2em !important;
  color: #ff585d;
  margin-right: 4px;
`;
