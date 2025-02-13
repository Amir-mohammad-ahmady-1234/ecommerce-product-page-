export default function Header() {
  return (
    <header className="header" role="banner">
      <div className="container center">
        <OvarlayCart />

        <HeaderContent />

        <HeaderProfileAndBuy />
      </div>
    </header>
  );
}

function OvarlayCart() {
  return (
    <div className="ovarlay-cart">
      <h4>Cart</h4>
      <div className="cart-content-box">
        <div className="cart-content-empty show">Your cart is empty</div>
        <div className="cart-content-full">
          <div className="cart-info center">
            <img src="images/image-product-1-thumbnail.jpg" alt="shoe" />
            <div className="price-info">
              Fall Limited Edition Sneakers $125.00 ×{" "}
              <span id="quantity">2</span> <span id="total">$250</span>
            </div>
            <img
              src="images/icon-delete.svg"
              alt="icon-delete"
              className="delete-icon"
            />
          </div>
          <button className="btn">Checkout</button>
        </div>
      </div>
    </div>
  );
}

function HeaderContent() {
  return (
    <div className="header-content center">
      <Logo />
      <MainNavList />
    </div>
  );
}

function Logo() {
  return (
    <div className="header-logo">
      <div>
        <svg
          className="icon-menu"
          viewBox="0 0 16 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
            fill="#69707D"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <div>
        <img src="images/logo.svg" alt="sneakers-text" />
      </div>
    </div>
  );
}

function MainNavList() {
  return (
    <ul className="main-nav-list center">
      <li>
        <svg
          className="cross-icon"
          viewBox="0 0 14 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#69707D"
            fillRule="evenodd"
          />
        </svg>
      </li>
      <li>
        <a href="#" className="main-nav-link">
          Collections
        </a>
      </li>
      <li>
        <a href="#" className="main-nav-link">
          Men
        </a>
      </li>
      <li>
        <a href="#" className="main-nav-link">
          Women
        </a>
      </li>
      <li>
        <a href="#" className="main-nav-link">
          About
        </a>
      </li>
      <li>
        <a href="#" className="main-nav-link">
          Contact
        </a>
      </li>
    </ul>
  );
}

function HeaderProfileAndBuy() {
  return (
    <div className="header-logo-box center">
      <AddCart />
      <img src="images/image-avatar.png" alt="Man Image" />
    </div>
  );
}

function AddCart() {
  return (
    <span className="add-cart">
      <span className="product-number">1</span>
      <svg
        className="h-logo"
        viewBox="0 0 22 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="header-logo"
          d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
          fill="#69707D"
          fillRule="nonzero"
        />
      </svg>
    </span>
  );
}
