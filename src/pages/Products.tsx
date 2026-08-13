import ProductCard from "../components/ProductCard";
import { useGetProductsQuery } from "../services/productsApi";

const Products = () => {
  const { data, isLoading, isError } = useGetProductsQuery();

  if (isLoading) {
    return (
      <main className="products-page">
        <div className="container">
          <p>Loading products...</p>
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="products-page">
        <div className="container">
          <p>Something went wrong while loading products.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="products-page">
      <section className="products-header">
        <div className="container">
          <p className="section-label">Featured Products</p>
          <h1>All Products</h1>
          <p>Explore our collection of quality products.</p>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            {data?.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
