import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useGetProductsQuery } from "../services/productsApi";

const Home = () => {
  const { data, isLoading, isError } = useGetProductsQuery();

  const products = data?.products ?? [];

  return (
    <main className="home-page">
      {/* CATEGORY SECTION */}
      <section className="categories-section">
        <div className="container">
          <div className="category-grid">
            <div className="category-card category-large">
              {products[0] && (
                <img src={products[0].images?.[0]} alt="Beauty" />
              )}

              <div className="category-overlay">
                <span>5 Items</span>
                <h3>BEAUTY</h3>
                <Link to="/products">Read More</Link>
              </div>
            </div>

            <div className="category-right">
              <div className="category-card category-wide">
                {products[1] && (
                  <img src={products[1].images?.[0]} alt="Beauty" />
                )}

                <div className="category-overlay">
                  <span>5 Items</span>
                  <h3>BEAUTY</h3>
                  <Link to="/products">Read More</Link>
                </div>
              </div>

              <div className="category-small-grid">
                <div className="category-card">
                  {products[2] && (
                    <img src={products[2].images?.[0]} alt="Beauty" />
                  )}

                  <div className="category-overlay">
                    <span>5 Items</span>
                    <h3>BEAUTY</h3>
                    <Link to="/products">Read More</Link>
                  </div>
                </div>

                <div className="category-card">
                  {products[3] && (
                    <img src={products[3].images?.[0]} alt="Beauty" />
                  )}

                  <div className="category-overlay">
                    <span>5 Items</span>
                    <h3>BEAUTY</h3>
                    <Link to="/products">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BESTSELLER PRODUCTS */}
      <section className="shop-section">
        <div className="container">
          <div className="section-heading">
            <p>Featured Products</p>
            <h2>BESTSELLER PRODUCTS</h2>
            <span>Problems trying to resolve the conflict between</span>
          </div>

          {isLoading && <p className="status-message">Loading products...</p>}

          {isError && (
            <p className="status-message">
              Unable to load products. Please try again.
            </p>
          )}

          {!isLoading && !isError && (
            <div className="products-grid home-products-grid">
              {products.slice(0, 10).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <Link to="/products" className="view-products-button">
            LOAD MORE PRODUCTS
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section">
        <div className="container">
          <div className="section-heading">
            <p>Featured Products</p>
            <h2>THE BEST SERVICES</h2>
            <span>Problems trying to resolve the conflict between</span>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">♟</div>
              <h3>Easy Wins</h3>
              <p>Get your best looking smile now!</p>
            </div>

            <div className="service-card">
              <div className="service-icon">▦</div>
              <h3>Concrete</h3>
              <p>
                Defalcate is most focused in helping you discover your most
                beautiful smile.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">↗</div>
              <h3>Hack Growth</h3>
              <p>Overcome any hurdle or any other problem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED POSTS */}
      <section className="posts-section">
        <div className="container">
          <div className="section-heading">
            <p>Practice Advice</p>
            <h2>Featured Posts</h2>
          </div>

          <div className="posts-grid">
            {products.slice(0, 3).map((product, index) => (
              <article className="post-card" key={product.id}>
                <div className="post-image">
                  <img src={product.images?.[0]} alt={product.title} />

                  <span className="post-badge">NEW</span>
                </div>

                <div className="post-content">
                  <div className="post-categories">
                    <span>Google</span>
                    <span>Trending</span>
                    <span>New</span>
                  </div>

                  <h3>Loudest à la Madison #{index + 1} (L&apos;Integral)</h3>

                  <p>
                    We focus on ergonomics and meeting you where you work.
                    It&apos;s only a keystroke away.
                  </p>

                  <div className="post-meta">
                    <span>13 February 2026</span>
                    <span>10 comments</span>
                  </div>

                  <Link to="/products" className="learn-more">
                    Learn More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial-section">
        <div className="container testimonial-container">
          <div className="testimonial-content">
            <h2>What they say about us</h2>

            <div className="testimonial-avatar">
              <span>R</span>
            </div>

            <div className="stars">★★★★☆</div>

            <p>Shopping here is always a smooth experience.</p>

            <strong>Adeola Adeyemi</strong>
            <span>Beauty Influncer</span>
          </div>

          <div className="testimonial-images">
            {products.slice(0, 9).map((product) => (
              <img key={product.id} src={product.images?.[0]} alt="" />
            ))}
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="hero-section">
        <div className="container hero-content">
          <div className="hero-text">
            <p className="hero-label">DESIGNING BETTER EXPERIENCE</p>

            <h1>
              Problems trying to resolve
              <br />
              the conflict between
            </h1>

            <p className="hero-description">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics.
            </p>

            <strong className="hero-price">$16.48</strong>

            <Link to="/products" className="hero-button">
              ADD YOUR CALL TO ACTION
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
