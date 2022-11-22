import React, { useEffect, useState } from 'react';
import Sidebar from '../Component/Sidebar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdminProductBox from '../Component/adminProductBox';




export default function Home_product() {
    const token = JSON.parse(localStorage.getItem('tokenAdmin'));
    const [products, setProducts] = useState([]);

    if (!token) window.location.href = 'signin-admin';
    useEffect(() => {
        async function getProducts() {
            const products = await axios.get(
                `http://localhost:8000/product/getAll`
            );
            setProducts(products.data);

        }
        getProducts();
    }, [token]);





    return (
        <>
            <Sidebar />
            <div class="content">
                <div>
                    <div className='img my-4 d-flex justify-content-center'>
                        <img src='../img/logo.png' alt='img'></img>
                    </div>
                    <div className='col-12 d-flex justify-content-center  mb-4'>
                        <h4 class="text-center fw-bold card-body3">HOME</h4>
                    </div>
                    <div>
                        <div className="container d-flex justify-content-center">
                            <div className="row col-7 d-flex justify-content-center">
                                <div className="col-md-8">
                                    <div className="input-group mb-4 rounded-3 ">
                                        <input type="text" className="form-control input-text m-1" placeholder="Search products...." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-secondary btn-lg m-1" type="button"><i class="bi bi-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {products?.map((product) =>
                        <AdminProductBox product={product} token={token} />
                    )}
                </div>
            </div>
        </>

    );
}
