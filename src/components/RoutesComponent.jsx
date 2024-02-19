import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { Products } from './Products'
import { Contact } from './Contact'
import { NavBar } from './NavBar'
import { Footer } from './Footer'
import { Product } from './Product'
import { SpecialButton } from './SpecialButton'
import { Cart } from './Cart'
import { Shipping } from './Shipping'
import { Payment } from './Payment'
import { WishListSummary } from './WishListSummary'

export const RoutesComponent = () => {
  return (
    <Router>
      <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/shipping' element={<Shipping />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/wishlist' element={<WishListSummary />} />
        </Routes>
        <Footer />
        <SpecialButton />
    </Router>
  )
}
