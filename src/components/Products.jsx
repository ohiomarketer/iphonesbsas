import React, { useEffect, useState } from "react";
import productsJson from "../assets/static/js/products";
import { useNavigate } from "react-router-dom";
import { useShopContext } from "../context/shopContext";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const navigate = useNavigate();
  const { addToWishList } = useShopContext();

  useEffect(() => {
    setBestSellers(["All", "Sellados", "Usados", "Nuevos"]);
    setProducts(productsJson);
  }, []);

  // Función para filtrar los productos según el filtro seleccionado
  const filterProducts = (filter) => {
    if (filter === "All") {
      setProducts(productsJson);
    } else {
      const filteredProducts = productsJson.filter(
        (product) => product.category === filter
      );
      setProducts(filteredProducts);
    }
    setSelectedFilter(filter);
  };

  return (
    <section className="section product" id="products">
      <div className="container">
        <h2 className="h2 section-title">Nuestros Bestsellers</h2>

        <ul className="filter-list">
          {bestSellers.map((bestSeller, index) => (
            <li key={index}>
              <button
                className={`filter-btn ${
                  bestSeller === selectedFilter ? "active" : ""
                }`}
                onClick={() => filterProducts(bestSeller)}
              >
                {bestSeller}
              </button>
            </li>
          ))}
        </ul>

        <ul className="product-list">
          {products.map((product, index) => (
            <li key={index} className="product-item" data-aos="fade">
              <div className="product-card" tabindex="0">
                <figure className="card-banner">
                  <img
                    src={product.image}
                    width="312"
                    height="350"
                    loading="lazy"
                    alt={product.title}
                    className="image-contain"
                  />

                  <ul className="card-action-list">
                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby={`card-label-1-${index}`}
                        onClick={() => navigate(`/products/${product.id}`)}
                      >
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>

                      <div
                        className="card-action-tooltip"
                        id={`card-label-1-${index}`}
                      >
                        Add to Cart
                      </div>
                    </li>

                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby={`card-label-2-${index}`}
                        onClick={() => addToWishList(product)}
                      >
                        <ion-icon name="heart-outline"></ion-icon>
                      </button>

                      <div
                        className="card-action-tooltip"
                        id={`card-label-2-${index}`}
                      >
                        Add to Whishlist
                      </div>
                    </li>
                  </ul>
                </figure>

                <div className="card-content">
                  <div className="card-cat">
                    <a href="#" className="card-cat-link">
                      {product.category}
                    </a>
                  </div>

                  <h3 className="h3 card-title">
                    <a href="#">{product.title}</a>
                  </h3>

                  <data className="card-price" value={product.price}>
                    ${product.price} ARS
                  </data>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
