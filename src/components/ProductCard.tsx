import { useState } from "react";
import type { Product } from "../types/product";
import { useAppDispatch } from "../app/hook";
import { addToCart } from "../features/cart/cartSlice";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useAppDispatch();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <article className="product-card">
      <div className="product-image-container">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />
      </div>

      <div className="product-card-content">
        <p className="product-category">{product.category}</p>

        <h3 className="product-title">{product.title}</h3>

        <p className="product-description">
          {product.description.length > 70
            ? `${product.description.substring(0, 70)}...`
            : product.description}
        </p>

        <div className="product-rating">
          <span>★</span>
          <span>{product.rating.toFixed(1)}</span>
        </div>

        <div className="product-price">${product.price.toFixed(2)}</div>

        <button
          type="button"
          className={`add-to-cart-button ${added ? "added" : ""}`}
          onClick={handleAddToCart}
        >
          {added ? "✓ Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
