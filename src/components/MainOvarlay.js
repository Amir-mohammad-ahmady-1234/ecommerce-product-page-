export default function MainOvarlay() {
  return (
    <>
      <div className="main-ovarlay center">
        <div className="ovarlay-hero-img-box">
          <ActiveSlide />

          <div className="ovarlay-operation-tab-box center">
            <img
              src="images/image-product-1-thumbnail.jpg"
              className="slider-dot"
              data-tab="0"
              alt="shoe"
            />
            <img
              src="images/image-product-2-thumbnail.jpg"
              className="slider-dot"
              data-tab="1"
              alt="shoe"
            />
            <img
              src="images/image-product-3-thumbnail.jpg"
              className="slider-dot"
              data-tab="2"
              alt="shoe"
            />
            <img
              src="images/image-product-4-thumbnail.jpg"
              className="slider-dot"
              data-tab="3"
              alt="shoe"
            />
          </div>
        </div>
      </div>
      <div className="bg"></div>
    </>
  );
}

function ActiveSlide() {
  return (
    <div className="hero-slider">
      <SliderImage />

      <button className="slider__btn slider__btn--left" aria-label="left align">
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
      <button className="slider-delete">
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
    </div>
  );
}

function SliderImage() {
  return (
    <div className="slider">
      <div className="slide">
        <img src="images/image-product-1.jpg" alt="Photo 1" />
      </div>
      <div className="slide">
        <img src="images/image-product-2.jpg" alt="Photo 2" />
      </div>
      <div className="slide">
        <img src="images/image-product-3.jpg" alt="Photo 3" />
      </div>
      <div className="slide">
        <img src="images/image-product-4.jpg" alt="Photo 4" />
      </div>
    </div>
  );
}
