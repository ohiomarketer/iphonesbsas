import React, { useEffect, useState } from "react";
import logo from "../assets/static/logof.png";
import { Link, useNavigate } from "react-router-dom";
import { useShopContext } from "../context/shopContext";

export const NavBar = () => {
  const [overlay, setOverlay] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState(0);
  const [totalWishlistItems, setTotalWishlistItems] = useState(0);

  const { getTotalPrice, getTotalItems, wishList, cartItems } = useShopContext();

  const handleNavOpen = () => {
    setOverlay(true);
    setNavbar(true);
  };

  const handleNavClose = () => {
    setOverlay(false);
    setNavbar(false);
  };

  useEffect(() => {
    const overlay = document.querySelector("[data-overlay]");

    const handleOverlayClick = () => {
      setOverlay(false);
      setNavbar(false);
    };

    overlay.addEventListener("click", handleOverlayClick);

    return () => {
      overlay.removeEventListener("click", handleOverlayClick);
    };
  }, []);

  useEffect(() => {
    setTotal(getTotalPrice());
    setItems(getTotalItems());
    setTotalWishlistItems(wishList.length);
  }, [getTotalItems]);

  return (
    <header className="header" data-header>
      <div className="container">
        <div
          className={!overlay ? "overlay" : "overlay active"}
          data-overlay
        ></div>

        <a href="#" className="logo" onClick={() => navigate("/")}>
          <img src={logo} width="100" height="100" alt="Footcap logo" />
        </a>

        <button
          className="nav-open-btn"
          data-nav-open-btn
          aria-label="Open Menu"
          onClick={handleNavOpen}
          style={{ padding: "5px" }}
        >
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        <nav className={!navbar ? "navbar" : "navbar active"} data-navbar>
          <button
            className="nav-close-btn"
            data-nav-close-btn
            aria-label="Close Menu"
            onClick={handleNavClose}
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <a href="#" className="logo">
            <img src={logo} width="150" height="150" alt="Footcap logo" />
          </a>

          <ul className="navbar-list">
            <li className="navbar-item" onClick={() => handleNavClose()}>
              <Link to="/" className="navbar-link">
                Inicio
              </Link>
            </li>

            <li className="navbar-item" onClick={() => handleNavClose()}>
              <Link to="/products" className="navbar-link">
                Productos
              </Link>
            </li>

            <li className="navbar-item" onClick={() => handleNavClose()}>
              <a href="https://www.instagram.com/iphonesbsas_/" target="_blank" className="navbar-link">
                Nosotros
              </a>
            </li>

            <li className="navbar-item" onClick={() => handleNavClose()}>
              <a href='https://www.instagram.com/iphonesbsas_/' target="_blank" className="navbar-link">
                Instagram
              </a>
            </li>

            <li className="navbar-item" onClick={() => handleNavClose()}>
              <Link to="/contact" className="navbar-link">
                Contacto
              </Link>
            </li>
          </ul>

          <ul className="nav-action-list">
            <li>
              <button className="nav-action-btn" onClick={() => handleNavClose()}>
                <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>

                <span className="nav-action-text">Desados</span>

                <data className="nav-action-badge" value="5" aria-hidden="true">
                  {totalWishlistItems}
                </data>
              </button>
            </li>

            <li>
              <button className="nav-action-btn" onClick={() => {
                handleNavClose()
                navigate('/cart')}}>
                <ion-icon name="bag-outline" aria-hidden="true"></ion-icon>

                <data className="nav-action-text" value="318.00">
                  Carrito: <strong> ${total}</strong>
                </data>

                <data className="nav-action-badge" value="4" aria-hidden="true">
                  {items}
                </data>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
