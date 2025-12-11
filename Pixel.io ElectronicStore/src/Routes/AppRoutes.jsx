import Home from '../pages/Home'
import { Route, Routes } from 'react-router-dom'
import AboutUs from '../pages/AboutUs'
import Contact from '../pages/Contact'
import PageNotFound from '../pages/PageNotFound'
import Product from '../pages/Product'
import Products from '../pages/Products'
import Wishlist from '../pages/Wishlist'
import Shop from '../pages/Shop'
import ShopEnquiry from '../pages/ShopEnquiry'
import Register from '../pages/Register'
import Login from '../pages/Login'
import MyAccount from '../pages/MyAccount'
import Cart from '../pages/Cart'
import Sales from '../pages/Sales'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/shopenquiry" element={<ShopEnquiry />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes;
