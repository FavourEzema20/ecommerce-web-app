import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hook";
import "../styles/header.css";

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M16 16L21 21" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M5 20C5.8 16.5 8.2 14.5 12 14.5C15.8 14.5 18.2 16.5 19 20"
      stroke="currentColor"
      strokeWidth="1.8"
    />
  </svg>
);

const CartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M3 4H5L7.2 15.5H18L21 7H6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="9" cy="19" r="1.3" fill="currentColor" />
    <circle cx="17" cy="19" r="1.3" fill="currentColor" />
  </svg>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const cartItems = useAppSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      {/* ================= TOP BAR ================= */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <span>☎ (225) 555-0118</span>
            <span>✉ michelle.rivera@example.com</span>
          </div>

          <div className="top-bar-center">
            <span>Follow Us and get a chance to win 80% off</span>
          </div>

          <div className="top-bar-right">
            <span>Follow Us</span>
            <span>◎</span>
            <span>◉</span>
            <span>♥</span>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="main-header">
        <div className="container header-container">
          {/* LOGO */}
          <Link to="/" className="logo" onClick={closeMenu}>
            Bandage
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="desktop-navigation">
            <Link to="/">Home</Link>
            <Link to="/products">Shop</Link>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
            <a href="#">Pages</a>
          </nav>

          <div className="header-right">
            <div className="auth-links">
              <a href="#">Login</a>
              <span>/</span>
              <a href="#">Register</a>
            </div>

            <button
              type="button"
              className="header-icon search-button"
              aria-label="Search"
            >
              <SearchIcon />
            </button>

            <button
              type="button"
              className="header-icon account-button"
              aria-label="Account"
            >
              <UserIcon />
            </button>

            <Link
              to="/cart"
              className="cart-link"
              aria-label="Cart"
              onClick={closeMenu}
            >
              <CartIcon />

              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link>

            <button
              type="button"
              className="mobile-menu-button"
              aria-label="Open menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <nav className="mobile-navigation">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/products" onClick={closeMenu}>
            Product
          </Link>

          <a href="#" onClick={closeMenu}>
            Pricing
          </a>

          <a href="#" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
