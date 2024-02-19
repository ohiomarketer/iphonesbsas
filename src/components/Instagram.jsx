import React, { useEffect, useState } from 'react'
import products from '../assets/static/js/products'

export const Instagram = () => {
    const [instaPosts, setInstaPosts] = useState([]);

    useEffect(() => {
        setInstaPosts(products.slice(0, 6));
    }, []);

  return (
    <section className="section insta-post" style={{
        padding: '30px 0px',
        border: '1px solid #e5e5e5',
    }} data-aos='fade'>

    <ul className="insta-post-list has-scrollbar">

        {
            instaPosts.map((product, index) => (
                <li key={index} className="insta-post-item">
                    <img src={product.image} width="100" height="100" loading="lazy" alt="Instagram post"
                    className="insta-post-banner image-contain" />

                    <a href="https://www.instagram.com/iphonesbsas_/" target='_blank' className="insta-post-link">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                </li>
            ))
        }

    </ul>

    </section>
    )
}