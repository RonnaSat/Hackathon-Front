import React, { useEffect, useState } from 'react';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import axios from 'axios';

export default function Home() {
    const [products, setProducts] = useState([]);
    const token = JSON.parse(localStorage.getItem('token'));

    useEffect(() => {
        async function getProducts() {
            const products = await axios.get(
                `http://localhost:8000/product/getAll`
            );
            setProducts(products.data);
        }
        getProducts();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = "/order"
    }

    return (
        <>
            <div className='bg-color'>
                <Navbar />
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./img/bg5.jpg" className="d-block w-100 h-25rem" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="./img/bg6.jpg" className="d-block w-100 h-25rem" alt="./img/516021.jpg" />
                        </div>
                        <div className="carousel-item">
                            <img src="./img/bg8.jpg" className="d-block w-100 h-25rem" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className='d-flex justify-content-center'>
                    <p class="text-center fw-bold card-body3 pt-5 fs-2">PERFUME</p>
                </div>
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

                <div className='col-12 d-flex justify-content-center'>
                    <div class="row row-cols-2 px-4">
                        {products?.map((product) =>
                            <div key={product._id} className='p-4  p-sm-5 d-flex justify-content-center'>
                                <div className="card mb-2" style={{ maxWidth: 540 }}>
                                    <div className="row g-0 ">
                                        <div className="col-md-4 btn-pp align-items-center d-flex">
                                            <div class="d-flex ">
                                                <img src={product.productImageBase64} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                        </div>
                                        <div className="col-md-8 ">
                                            <div className="card-body bg-cream">
                                                <h5 className="card-title">{product.productName}</h5>
                                                <p className="card-text text-truncate">{product.productDescription}</p>
                                                <hr></hr>
                                                <p className="card-text">Brand Product</p>
                                                <hr></hr>
                                                <div className='d-flex justify-content-md-center'>
                                                    <form onSubmit={handleSubmit}><button class="btn-or btn badge text-uppercase fs-6" type="submit">get free</button></form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
                <Footer />
            </div>


        </>

    );
}
