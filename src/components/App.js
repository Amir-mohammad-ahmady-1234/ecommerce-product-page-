import { useState } from "react";

import Header from "./Header";
import Main from "./Main";
import MainOvarlay from "./MainOvarlay";

import { ProductsImages } from "./Main";
import { ProductsTextes } from "./Main";
import { ShowBigCurrentBox } from "./Main";
import { BoxesTabs } from "./Main";
import { ProductPriceWithOfer } from "./Main";
import { ProductPriceSelectionWithAddToCart } from "./Main";
import { ProNumSelection } from "./Main";
import { AddToCartBtn } from "./Main";

const initialProductImages = [
  {
    id: 1,
    smallSrc: "images/image-product-1-thumbnail.jpg",
    bigSrc: "images/image-product-1.jpg",
  },
  {
    id: 2,
    smallSrc: "images/image-product-2-thumbnail.jpg",
    bigSrc: "images/image-product-2.jpg",
  },
  {
    id: 3,
    smallSrc: "images/image-product-3-thumbnail.jpg",
    bigSrc: "images/image-product-3.jpg",
  },
  {
    id: 4,
    smallSrc: "images/image-product-4-thumbnail.jpg",
    bigSrc: "images/image-product-4.jpg",
  },
];

export default function App() {
  const [selectedImage, setSelectedImage] = useState(1);
  return (
    <>
      <Header />

      <Main>
        <ProductsImages >
          <ShowBigCurrentBox initialProductImages={initialProductImages} selectedImage={selectedImage} />
          <BoxesTabs initialProductImages={initialProductImages} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
        </ProductsImages>

        <ProductsTextes>
          <ProductPriceWithOfer />

          <ProductPriceSelectionWithAddToCart>
            <ProNumSelection />
            <AddToCartBtn />
          </ProductPriceSelectionWithAddToCart>
        </ProductsTextes>
      </Main>

      <MainOvarlay />
    </>
  );
}
