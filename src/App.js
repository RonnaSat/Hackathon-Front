import { Routes, Route, Form } from "react-router-dom";
import React from "react";

/*Component*/
//import Footer from './Component/Footer';
//import Navbar from './Component/Navbar';

/*Menu*/
import Home from './Menu/Home';
import Login from './Menu/login';
import Register from './Menu/Register';
import Select from './Menu/Select';
import Review from './Menu/Review';
import Order from "./Menu/Order";

/*admin*/
import Sidebar from "./Component/Sidebar";
import Signin from './Admin/Signin-admin';
import Home_admin from './Admin/Home-admin';
import Add_product from './Admin/Add-product';
import Review_admin from "./Admin/Review-admin";

import Error from "./Component/Error";





function App() {

  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/order/:productName" element={<Order />} />
      <Route path="/order/" element={<Order />} />
      <Route path="/select" element={<Select />} />
      <Route path="/review" element={<Review />} />

      <Route path="/sidebar" element={<Sidebar />} />
      <Route path="/signin-admin" element={<Signin />} />
      <Route path="/home_admin" element={<Home_admin />} />
      <Route path="/add_product" element={<Add_product />} />
      <Route path="/add_product/:productName" element={<Add_product />} />
      <Route path="/review_admin" element={<Review_admin />} />
      <Route path="*" element={<Error />} />

      <Route path="/review_admin" element={<Review_admin />} />
    </Routes>
  );
}

export default App;
