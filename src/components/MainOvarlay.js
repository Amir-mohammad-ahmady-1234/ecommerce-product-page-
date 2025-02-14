export default function MainOvarlay({
  children,
  isSideBarOpen,
  ovarlayActive,
}) {
  return (
    <>
      <div className={`main-ovarlay center ${ovarlayActive && 'ovarlay-active'}`}>
        <div className="ovarlay-hero-img-box">{children}</div>
      </div>
      <div className={`bg ${isSideBarOpen ? "bg-color" : ""}`}></div>
    </>
  );
}

export function OvarlayOperationTabBox({ children }) {
  return <>{children}</>;
}
export function BoxesTabs2({
  initialProductImages,
  selectedImage,
  setSelectedImage,
  setIsCartOpen,
}) {
  function handleChangeImage(id) {
    setSelectedImage(id);
    setIsCartOpen(false);
  }

  return (
    <div className="ovarlay-operation-tab-box center">
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
      className={`slider-dot ${
        selectedImage === img.id ? "slider-dot-active" : ""
      }`}
      data-tab={img.id}
      alt="shoes"
      onClick={onClick}
    />
  );
}

export function ActiveSlide({ children }) {
  return <div className="hero-slider">{children}</div>;
}

export function SliderControler({ setSelectedImage, initialProductImages, setOvarlayActive }) {
  function handlePreviousPicture() {
    setSelectedImage((selected) =>
      selected > 1 ? selected - 1 : initialProductImages.length
    );
  }

  function handleNextPicture() {
    setSelectedImage((selected) => (selected < 4 ? selected + 1 : 1));
  }

  function handleCloseModaul () {
    setOvarlayActive(false)
  }

  return (
    <>
      {" "}
      <button
        className="slider__btn slider__btn--left"
        aria-label="left align"
        onClick={handlePreviousPicture}
      >
        <svg
          className="btn-right"
          viewBox="0 0 12 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="arrow-icon"
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <button
        className="slider__btn slider__btn--right"
        aria-label="right align"
        onClick={handleNextPicture}
      >
        <svg
          className="btn-right"
          viewBox="0 0 13 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="arrow-icon"
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <button className="slider-delete" onClick={handleCloseModaul}>
        <svg
          id="cross-icon-p"
          viewBox="0 0 14 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="cross-icon"
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#69707D"
            fillRule="evenodd"
          />
        </svg>
      </button>
    </>
  );
}

export function SliderImage({ selectedImage, initialProductImages }) {
  return (
    <div className="slider">
      {initialProductImages.map((img) => {
        return (
          <MainSlidImage img={img} selectedImage={selectedImage} key={img.id} />
        );
      })}
    </div>
  );
}

function MainSlidImage({ img, selectedImage }) {
  if (img.id === selectedImage) {
    return (
      <div className="slide">
        <img src={img.bigSrc} alt={`Photo ${img.id}`} />
      </div>
    );
  }
}
