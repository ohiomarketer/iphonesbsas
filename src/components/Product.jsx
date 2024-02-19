import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useShopContext } from "../context/shopContext"; // Importamos el hook del contexto
import products from "../assets/static/js/products";
import { toast } from "react-toastify";

export const Product = () => {
  const [product, setProduct] = useState({});
  const [sizes, setSizes] = useState([]);
  const { id } = useParams();
  const productRef = useRef();
  const { cartItems, addToCart, addToWishList } = useShopContext(); // Obtenemos las funciones del contexto

  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product); // Agrega el producto al carrito
    // Puedes añadir aquí cualquier lógica adicional, como mostrar una notificación
  };

  const handleBuyNow = () => {
    // Check if the product is already in the cart
    const existingProduct = cartItems.find((item) => item.id === id);
    if (existingProduct) {
      toast.error(`¡Ya tienes este producto en el carrito!`, {
        position: "bottom-center",
      });
      navigate("/cart");
    } else {
      addToCart(product);
      navigate("/cart");
    }
  };

  const size = ["S", "M", "L", "XL", "XXL"];

  useEffect(() => {
    const prod = products.find((product) => product.id === id);
    setProduct(prod);
    setSizes(size);

    if (productRef.current) {
      productRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div
      className="product-section"
      style={{
        padding: "30px 15px",
      }}
      ref={productRef}
    >
        <p className="go-back" style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '20px',
        }}>
            <a href="#" onClick={() => navigate('/')} style={{ color: '#ff57577c'}}>&lt;&lt; Seguir Comprando</a>
        </p>
      <ul>
        <li className="product-item">
          <div className="product-card">
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
                    aria-labelledby={`card-label-2-${""}`}
                    onClick={() => addToWishList(product)} // Agregar producto a la lista de deseos
                  >
                    <ion-icon name="heart-outline"></ion-icon>
                  </button>

                  <div
                    className="card-action-tooltip"
                    id={`card-label-2-${""}`}
                  >
                    Add to Whishlist
                  </div>
                </li>
              </ul>
            </figure>

            <div className="card-content">
              <h3
                className="h3 card-title"
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  color: "#000",
                  marginBottom: "10px",
                }}
              >
                <a href="#">{product.title}</a>
              </h3>

              <data
                className="card-price"
                value={product.price}
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                ${product.price} ARS
              </data>
            </div>
          </div>
        </li>
      </ul>

      <div
        className="product-actions"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <button
          className="btn btn-primary"
          style={{
            padding: "15px 20px",
            fontSize: "1.5rem",
            fontWeight: "bold",
            margin: "0 5px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            backgroundColor: "#ff5757",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            width: "50%",
          }}
          onClick={handleAddToCart} // Agregar producto al carrito
        >
          Agregar
        </button>
        <button
          className="btn btn-secondary"
          style={{
            padding: "15px 20px",
            fontSize: "1.5rem",
            fontWeight: "bold",
            margin: "0 5px",
            border: "1px solid #ff5757",
            borderRadius: "5px",
            cursor: "pointer",
            backgroundColor: "#fff",
            color: "#ff5757",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
          }}
            onClick={handleBuyNow}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};
