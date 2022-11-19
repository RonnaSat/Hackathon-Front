import { Routes, Route } from "react-router-dom";
import React from "react";

/*Component*/ 
//import Footer from './Component/Footer';
//import Navbar from './Component/Navbar';

/*Menu*/
import Home from './Menu/Home';
import Login from './Menu/login';
import Register from './Menu/Register';
import Receipt from './Menu/Receipt';
import Select from './Menu/Select';
import Review from './Menu/Review';

/*admin*/
import Sidebar from "./Component/Sidebar";
import Signin from './Admin/Signin-admin';
import Home_admin from './Admin/Home-admin';
import Edit_product from './Admin/Edit-product';
import Add_product from './Admin/Add-product';
import Review_admin from "./Admin/Review-admin";




function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="receipt" element={<Receipt/>}/>
      <Route path="/select" element={<Select/>}/>
      <Route path="/sidebar" element={<Sidebar/>}/>
      <Route path="/signin-admin" element={<Signin/>}/>
      <Route path="/home_admin" element={<Home_admin/>}/>
      <Route path="/edit_product" element={<Edit_product/>}/>
      <Route path="/add_product" element={<Add_product/>}/>
      <Route path="/review" element={<Review/>}/>
      <Route path="/review_admin" element={<Review_admin/>}/>
    </Routes>
  );
}

export default App;
