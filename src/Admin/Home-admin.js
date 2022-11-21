import React, { useEffect, useState } from 'react';
import Sidebar from '../Component/Sidebar';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Home_product() {
    const token = JSON.parse(localStorage.getItem('token'));
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

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target)

    };
    return (
        <>
            <Sidebar />
            <div class="content">
                <div>
                    <div className='img my-4 d-flex justify-content-center'>
                        <img src='img/logo.png'></img>
                    </div>
                    <div className='col-12 d-flex justify-content-center  mb-4'>
                        <h4 class="text-center fw-bold card-body3">HOME</h4>
                    </div>
                    <div>
                        <div className="container d-flex justify-content-center">
                            <div className="row col-7 d-flex justify-content-center">
                                <div className="col-md-8">
                                    <div className="input-group mb-3 rounded-3 ">
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
                        <div className="container d-flex justify-content-center col-12">
                            <div class="row d-flex justify-content-center pb-3 col-12">
                                <div class="col-8">
                                    <div class="p-4 border bg-pp rounded-3 mb-5">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col bg-light rounded-3 col-2">
                                                    <div class="d-flex ">
                                                        <img src='./img/113.png' className="img-fluid rounded-start" alt="..." />
                                                    </div>
                                                </div>
                                                <div class="col m-2">
                                                    <h5 className="card-title pt-3 fw-bold pb-2">{product.productName}</h5>
                                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                </div>
                                                <div class="row col-3 ">
                                                    <div class="col col-6 d-flex justify-content-end align-items-center" >
                                                        <Link to='/add_product' class="bi bi-pencil-square fs-3"></Link>
                                                    </div>
                                                    <div class="col col-6 d-flex justify-content-center align-items-center">
                                                        <form onSubmit={onSubmit}>
                                                            <input type="hidden" />
                                                            <button type='submit' class="bi bi-trash-fill fs-3"></button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)}
                </div>
            </div>
        </>

    );
}
