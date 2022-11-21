import React from 'react';
import { Link } from 'react-router-dom';
export default function Sidebar() {
    return (
        <>
            <div class="sidebar">
                <Link to="/home_admin" >HOME</Link>
                <Link to="/add_product" >ADD PRODUCT</Link>
                <Link to="/review_admin" >REVIEW</Link>
                <Link to="/signin-admin" >LOGOUT</Link>
                
            </div>
        </>
    );






}