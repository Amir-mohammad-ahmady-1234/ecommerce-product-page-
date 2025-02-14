import { useState } from "react";

export default function Main({ children }) {
  return (
    <main role="main">
      <section className="section-hero">
        <div className="hero container grid grid-2-cols">{children}</div>
      </section>
    </main>
  );
}

export function ProductsImages({ children }) {
  return <div className="hero-img-box">{children}</div>;
}

export function ShowBigCurrentBox({
  initialProductImages,
  selectedImage,
  OvarlayOperationTabBox,
}) {
  return (
    <div className="operation-content-box">
      {initialProductImages.map((img) => {
        return (
          <BigPicture
            img={img}
            selectedImage={selectedImage}
            OvarlayOperationTabBox={OvarlayOperationTabBox}
            key={img.id}
          />
        );
      })}
    </div>
  );
}

function BigPicture({ img, selectedImage, OvarlayOperationTabBox }) {
  return (
    <img
      src={img.bigSrc}
      className={`product-image operation-content-4 ${
        selectedImage === img.id ? "active" : ""
      }`}
      alt="shoes"
      width="400"
    />
  );
}

export function BoxesTabs({
  initialProductImages,
  selectedImage,
  setSelectedImage,
  setIsCartOpen
}) {
  function handleChangeImage(id) {
    setSelectedImage(id);
    setIsCartOpen(false)
  }

  return (
    <div className="operation-tab-box center">
      {initialProductImages.map((img) => {
        return (
          <SmallPicture
            img={img}
            selectedImage={selectedImage}
            onClick={() => handleChangeImage(img.id)}
            key={img.id}
          />
        );
      })}
    </div>
  );
}

function SmallPicture({ selectedImage, img, onClick }) {
  return (
    <img
      src={img.smallSrc}
      className={`product-image-small ${
        selectedImage === img.id ? "active-small" : ""
      }`}
      data-tab={img.id}
      alt="shoes"
      onClick={onClick}
    />
  );
}

export function ProductsTextes({ children }) {
  return (
    <div className="hero-text-box">
      <h3>Sneaker company</h3>
      <h1 className="headings-primary">Fall Limited Edition Sneakers</h1>
      <p className="description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      {children}
    </div>
  );
}

export function ProductPriceWithOfer() {
  return (
    <div className="price-section">
      <div className="price">
        $125.00 <span>50%</span>
      </div>
      <div className="old-price">
        {" "}
        <del>$250.00</del>
      </div>
    </div>
  );
}

export function ProductPriceSelectionWithAddToCart({ children }) {
  return <div className="btn-list grid">{children}</div>;
}

export function ProNumSelection({
  numberOfProducts,
  setNumberOfProducts,
  setIsCartOpen,
}) {
  function handlePlusNum() {
    setNumberOfProducts((num) => num + 1);
    setIsCartOpen(false);
  }

  function handleMinus() {
    setNumberOfProducts((num) => (numberOfProducts > 1 ? num - 1 : num));
    setIsCartOpen(false);
  }

  return (
    <div className="number-box">
      <button id="decrease" onClick={handleMinus}>
        <img src="images/icon-minus.svg" alt="icon-minus" />
      </button>
      <span id="quanity">{numberOfProducts}</span>
      <button id="increase" onClick={handlePlusNum}>
        <img src="images/icon-plus.svg" alt="icon-plus" />
      </button>
    </div>
  );
}

export function AddToCartBtn({
  numberOfProducts,
  setNumberOfProducts,
  setShoppingCartProducts,
  setNumberOfSelectedProduct,
  numberOfSelectedProduct,
  setIsCartOpen,
}) {
  function handleAddToCart() {
    const newProduct = {
      id: crypto.randomUUID(),
      src: "images/image-product-1-thumbnail.jpg",
      name: "Fall Limited Edition Sneakers",
      num: numberOfSelectedProduct,
      price: "125.00",
    };

    setShoppingCartProducts((items) =>
      items.length && items[items.length - 1].name === newProduct.name
        ? items
        : [...items, newProduct]
    );
    setIsCartOpen(false);
    setNumberOfSelectedProduct(numberOfProducts);
    // setNumberOfProducts(1);
  }

  return (
    <button className="btn center" onClick={handleAddToCart}>
      <span>
        <svg
          className="h-logo"
          viewBox="0 0 22 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="btn-icon"
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="#69707D"
            fillRule="nonzero"
          />
        </svg>
      </span>
      Add to cart
    </button>
  );
}
