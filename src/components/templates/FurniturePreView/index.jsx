import React, { useState, useEffect } from 'react';
import { FurnitureViewer, FurnitureImageSlider } from 'components';
import { MESSAGE } from 'constants';

export function FurniturePreView() {
  const [furnitureData, setFurnitureData] = useState({
    id: 0,
    imageUrl: '',
    productList: [],
  });
  const [furnitureFocused, setFurnitureFocused] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://cdn.ggumim.co.kr/test/image_product_link.json');
        if (response.status > 400) {
          throw new Error(MESSAGE.SERVER_REQUEST_FAIL);
        }
        const json = await response.json();
        setFurnitureData(json);
      } catch (error) {
        console.log(MESSAGE.SERVER_NOT_RESPONDING, error);
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
