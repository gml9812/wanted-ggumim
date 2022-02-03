import React from 'react';
import { FurniturePreView } from 'components';

function App() {
  return <FurniturePreView />;
}

/*
배경 사진= onclick 시 focused 초기화.

돋보기=> focused 받아 x자 혹은 돋보기 표시, onClick시 focusedGAGU 변경
말풍선 => focused 받아 hidden 결정, 입점여부 받아 형식 결정.

아래 사진 => focused 받아 테두리 결정. 
아래 사진 리스트 => onSlide 시 움직여야.
*/

// 버튼 좌표 고치기. => 해결, 그런데 왜?
// toggle box위치, toggle box 아래 화살표 모양 고치기.
// imageSlider 슬라이드 기능 넣기.

export default App;
