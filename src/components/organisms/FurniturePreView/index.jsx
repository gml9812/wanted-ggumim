import React, { useState, useEffect } from 'react';
import { FurnitureViewer, FurnitureImageSlider } from 'components';

export function FurniturePreView() {
  const [furnitureData, setFurnitureData] = useState({
    id: 0,
    imageUrl: '',
    productList: [],
  });
  const [furnitureFocused, setFurnitureFocused] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      // 에러 관리 추가하기.
      try {
        const response = await fetch('http://localhost:3000/data/data.json'); // http://localhost:3000/data/data.json http://cdn.ggumim.co.kr/test/image_product_link.json
        const json = await response.json();
        setFurnitureData(json);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
  }, []);

  return (
    <center>
      <FurnitureViewer
        furnitureList={furnitureData.productList}
        furnitureFocused={furnitureFocused}
        onClick={setFurnitureFocused}
        backGroundImage={furnitureData.imageUrl}
      />
      <FurnitureImageSlider
        furnitureList={furnitureData.productList}
        furnitureFocused={furnitureFocused}
        onClick={setFurnitureFocused}
      />
    </center>
  );
}
