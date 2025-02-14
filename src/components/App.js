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

import { ActiveSlide } from "./MainOvarlay";
import { OvarlayOperationTabBox } from "./MainOvarlay";
import { SliderImage } from "./MainOvarlay";
import { SliderControler } from "./MainOvarlay";

import { OvarlayCart } from "./Header";
import { HeaderContent } from "./Header";
import { HeaderProfileAndBuy } from "./Header";
import { Logo } from "./Header";
import { MainNavList } from "./Header";
import { AddCart } from "./Header";

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
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [numberOfProducts, setNumberOfProducts] = useState(1);
  const [numberOfSelectedProduct, setNumberOfSelectedProduct] = useState(1);
  const [shoppingCartProducts, setShoppingCartProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      {/* Header start */}
      <Header>
        <OvarlayCart
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
          shoppingCartProducts={shoppingCartProducts}
          setShoppingCartProducts={setShoppingCartProducts}
          numberOfSelectedProduct={numberOfSelectedProduct}
        />

        <HeaderContent>
          <Logo setIsSideBarOpen={setIsSideBarOpen} />
          <MainNavList
            isSideBarOpen={isSideBarOpen}
            setIsSideBarOpen={setIsSideBarOpen}
          />
        </HeaderContent>

        <HeaderProfileAndBuy>
          <AddCart
            numberOfProducts={numberOfProducts}
            shoppingCartProducts={shoppingCartProducts}
            setIsCartOpen={setIsCartOpen}
            numberOfSelectedProduct={numberOfSelectedProduct}
          />
        </HeaderProfileAndBuy>
      </Header>
      {/* end Header */}

      {/* Main start */}
      <Main>
        <ProductsImages>
          <ShowBigCurrentBox
            initialProductImages={initialProductImages}
            selectedImage={selectedImage}
          />
          <BoxesTabs
            initialProductImages={initialProductImages}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            setIsCartOpen={setIsCartOpen}
          />
        </ProductsImages>

        <ProductsTextes>
          <ProductPriceWithOfer />

          <ProductPriceSelectionWithAddToCart>
            <ProNumSelection
              numberOfProducts={numberOfProducts}
              setNumberOfProducts={setNumberOfProducts}
              setIsCartOpen={setIsCartOpen}
            />
            <AddToCartBtn
              numberOfProducts={numberOfProducts}
              setNumberOfProducts={setNumberOfProducts}
              setShoppingCartProducts={setShoppingCartProducts}
              setNumberOfSelectedProduct={setNumberOfSelectedProduct}
              numberOfSelectedProduct={numberOfSelectedProduct}
              setIsCartOpen={setIsCartOpen}
            />
          </ProductPriceSelectionWithAddToCart>
        </ProductsTextes>
      </Main>
      {/* end Main */}

      {/*  MainOvarlay start */}
      <MainOvarlay isSideBarOpen={isSideBarOpen}>
        <ActiveSlide>
          <SliderImage
            selectedImage={selectedImage}
            initialProductImages={initialProductImages}
          />
          <SliderControler
            setSelectedImage={setSelectedImage}
            initialProductImages={initialProductImages}
          />
        </ActiveSlide>

        <OvarlayOperationTabBox />
      </MainOvarlay>
      {/* end MainOvarlay */}
    </>
  );
}
