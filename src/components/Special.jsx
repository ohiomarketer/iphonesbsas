import React, { useEffect, useState } from 'react'
import products from '../assets/static/js/products'
import specialbanner from '../assets/static/special-banner.png'
import { useNavigate } from 'react-router-dom';
import { useShopContext } from '../context/shopContext';

export const Special = () => {
    const [specials, setSpecials] = useState([]);
     const navigate = useNavigate();
     const { addToWishList } = useShopContext();

    useEffect(() => {
        setSpecials(products.slice(0, 4));
    }, []);

  return (
    <section className="section special">
        <div className="container">

          <div className="special-product">

            <h2 className="h2 section-title">
              <span className="text">Ofertas Especiales</span>

              <span className="line"></span>
            </h2>

            <ul className="has-scrollbar">
                {
                    specials.map((product, index) => (
                        <li key={index} className="product-item">
                            <div className="product-card" tabIndex="0">

                                <figure className="card-banner">
                                    <img src={product.image} width="312" height="350" loading="lazy"
                                    alt={product.title} className="image-contain" />
                                    
                                    <div className="card-badge">New</div>

                                    <ul className="card-action-list">
                                        
                                        <li className="card-action-item">
                                            <button className="card-action-btn" aria-labelledby={`card-label-1-${index}`}
                                                onClick={() => navigate(`/products/${product.id}`)}
                                            >
                                                <ion-icon name="cart-outline"></ion-icon>
                                            </button>

                                            <div className="card-action-tooltip" id={`card-label-1-${index}`}>Add to Cart</div>
                                        </li>

                                        <li className="card-action-item">
                                            <button className="card-action-btn" aria-labelledby={`card-label-2-${index}`}
                                                onClick={() => addToWishList(product)}
                                            >
                                                <ion-icon name="heart-outline"></ion-icon>
                                            </button>

                                            <div className="card-action-tooltip" id={`card-label-2-${index}`}>Add to Whishlist</div>
                                        </li>

                                    </ul>
                                </figure>

                                <div className="card-content">

                                    <div className="card-cat">
                                        <a href="#" className="card-cat-link">{product.category}</a>
                                    </div>

                                    <h3 className="h3 card-title">
                                        <a href="#">{product.title}</a>
                                    </h3>

                                    <data className="card-price" value={product.price}>${product.price} ARS</data>

                                </div>

                            </div>
                        </li>
                    ))
                }
            </ul>

            </div>

        </div>
        </section>
    )
}
