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
    smallSrc: "image-product-1-thumbnail.jpg",
    bigSrc: "image-product-1.jpg",
  },
  {
    id: 2,
    smallSrc: "image-product-2-thumbnail.jpg",
    bigSrc: "image-product-2.jpg",
  },
  {
    id: 3,
    smallSrc: "image-product-3-thumbnail.jpg",
    bigSrc: "image-product-3.jpg",
  },
  {
    id: 4,
    smallSrc: "image-product-4-thumbnail.jpg",
    bigSrc: "image-product-4.jpg",
  },
];

export default function App() {
  return (
    <>
      <Header />

      <Main>
        <ProductsImages>
          <ShowBigCurrentBox />
          <BoxesTabs />
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
