// AppRouters.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Whislist from "../pages/Whislist";
import Sales from "../pages/Sales";
import Accesories from "../pages/Accesories";
import Order from "../pages/Order";
import Navbar from "../componets/blocks/Navbar";
import Breadcrumbs from "../componets/blocks/Breadcrumbs";
import DarkModeToggle from "../componets/base/DarkModeToggle";
import SingleProduct from "../pages/SingleProduct";

const AppRouters = () => {
  return (
    <Router>
      <Navbar />
      <Breadcrumbs />
      <DarkModeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/accessories" element={<Accesories />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/whislist" element={<Whislist />} />
      </Routes>
    </Router>
  );
};

export default AppRouters;
