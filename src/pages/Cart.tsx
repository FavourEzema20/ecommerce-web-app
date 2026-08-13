import { Link } from "react-router-dom";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  clearCart,
} from "../features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../app/hook";

const Cart = () => {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state) => state.cart.items);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const shipping = subtotal > 0 ? 0 : 0;

  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <div className="container empty-cart">
          <div className="empty-cart-icon">🛒</div>

          <h1>Your cart is empty</h1>

          <p>Looks like you haven't added anything to your cart yet.</p>

          <Link to="/products" className="cart-primary-button">
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="container">
        {/* PAGE HEADER */}
        <div className="cart-page-header">
          <div>
            <p className="cart-breadcrumb">
              Home / <span>Cart</span>
            </p>

            <h1>Shopping Cart</h1>
          </div>

          <button
            type="button"
            className="clear-cart-button"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>

        {/* CART */}
        <div className="cart-layout">
          <section className="cart-items-section">
            <div className="cart-table-header">
              <span>PRODUCT</span>
              <span>PRICE</span>
              <span>QUANTITY</span>
              <span>TOTAL</span>
            </div>

            {cartItems.map((item) => (
              <article className="cart-item" key={item.id}>
                <div className="cart-product">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="cart-product-image"
                  />

                  <div className="cart-product-info">
                    <h2>{item.title}</h2>

                    <p>{item.category}</p>

                    <button
                      type="button"
                      className="remove-button"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="cart-unit-price">${item.price.toFixed(2)}</div>

                <div className="quantity-controls">
                  <button
                    type="button"
                    aria-label={`Decrease ${item.title} quantity`}
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    type="button"
                    aria-label={`Increase ${item.title} quantity`}
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    +
                  </button>
                </div>

                <strong className="cart-item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </strong>
              </article>
            ))}

            <Link to="/products" className="continue-shopping-button">
              ← Continue Shopping
            </Link>
          </section>

          {/* SUMMARY */}
          <aside className="cart-summary">
            <h2>Cart Summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>

              <strong>${subtotal.toFixed(2)}</strong>
            </div>

            <div className="summary-row">
              <span>Shipping</span>

              <strong>{shipping === 0 ? "Free" : `$${shipping}`}</strong>
            </div>

            <div className="summary-divider" />

            <div className="summary-total">
              <span>Total</span>

              <strong>${total.toFixed(2)}</strong>
            </div>

            <button type="button" className="checkout-button">
              Proceed to Checkout
            </button>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Cart;
