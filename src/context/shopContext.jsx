import React, { createContext, useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Creamos el contexto del carrito
const CartContext = createContext();

// Hook personalizado para acceder al contexto del carrito
export const useShopContext = () => useContext(CartContext);

// Proveedor del contexto del carrito
export const ShopProvider = ({ children }) => {
    // Obtener el estado inicial del carrito del localStorage o usar un array vacío si no hay datos
    const initialCartItems = JSON.parse(localStorage.getItem('cart-items-01')) || [];

    const [cartItems, setCartItems] = useState(initialCartItems);
    const [wishList, setWishList] = useState([]);

    // Guardar el estado del carrito en el localStorage cada vez que cambie
    useEffect(() => {
        localStorage.setItem('cart-items-01', JSON.stringify(cartItems));
    }, [cartItems]);

    // Función para agregar un producto al carrito
    const addToCart = (product, message) => {
        // Check if the product is already in the cart
        const existingProductIndex = cartItems.findIndex((item) => item.id === product.id);

        if (existingProductIndex !== -1) {
            // If the product is already in the cart, show toast and do not add again
            toast.error(`¡Solo puedes agregar una unidad del mismo producto al carrito!`, {
                position: 'bottom-center',
            });
        } else {
            // If the product is not in the cart, add it to the cart
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
            toast.success(`${product.title} agregado al carrito.`, {
                position: 'bottom-center',
            });
        }
    };

    // Función para eliminar un producto del carrito
    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter((item) => item.id !== productId));
    };

    // Función para vaciar el carrito
    const clearCart = () => {
        setCartItems([]);
    };

    // Función para calcular el total de la compra
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    // Función para obtener la cantidad total de productos en el carrito
    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const addToWishList = (product) => {
        const existingProductIndex = wishList.findIndex((item) => item.id === product.id);

        if (existingProductIndex !== -1) {
            toast.error(`¡${product.title} ya está en tu lista de deseos!`, {
                position: 'bottom-center',
            });
        } else {
            setWishList([...wishList, product]);
            toast.success(`${product.title} agregado a tu lista de deseos.`, {
                position: 'bottom-center',
            });
        }
    };

    const removeFromWishList = (productId) => {
        setWishList(wishList.filter((item) => item.id !== productId));
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                getTotalPrice,
                getTotalItems,
                wishList,
                addToWishList,
                removeFromWishList,
            }}
        >
            {children}
            <ToastContainer />
        </CartContext.Provider>
    );
};
