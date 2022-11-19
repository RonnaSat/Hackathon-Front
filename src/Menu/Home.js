import React, { useEffect, useState } from 'react';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import axios from 'axios';

export default function Home() {
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');

    useEffect(() => {
        async function getProducts() {
            const products = await axios.get(
                `http://localhost:8000/product/getAll`
            );
            setProducts(products.data);
        }
        getProducts();
        setToken(JSON.parse(localStorage.getItem('token')));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        token ? window.location.href = '/select' : window.location.href = '/login'

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
                            <img src="./img/516021.jpg" className="d-block w-100 h-25rem" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="./img/516021.jpg" className="d-block w-100 h-25rem" alt="./img/516021.jpg" />
                        </div>
                        <div className="carousel-item">
                            <img src="./img/516021.jpg" className="d-block w-100 h-25rem" alt="..." />
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
                <div>
                    <p class="text-center fw-bold card-body3 p-5 fs-2 ps-5">PERFUME</p>
                </div>

                <div className='col-12 d-flex justify-content-center'>
                    {products?.map((product) =>
                        <div className='p-4 p-sm-5'>
                            <div className="card mb-3" style={{ maxWidth: 540 }}>
                                <div className="row g-0">
                                    <div className="col-md-4 btn-pp align-items-center d-flex">
                                        <div class="d-flex ">
                                            <img src='./img/113.png' className="img-fluid rounded-start" alt="..." />
                                        </div>
                                    </div>
                                    <div className="col-md-8 ">
                                        <div className="card-body bg-cream">
                                            <h5 className="card-title">{product.productName}</h5>
                                            <p className="card-text">{product.productDescription}</p>
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

                    {/* <div className='p-4 p-sm-5'>
                        <div className="card mb-3" style={{ maxWidth: 540 }}>
                            <div className="row g-0">
                                <div className="col-md-4 btn-pp align-items-center d-flex">
                                    <div class="d-flex ">
                                        <img src='./img/112.png' className="img-fluid rounded-start" alt="..." />
                                    </div>
                                </div>
                                <div className="col-md-8 ">
                                    <div className="card-body bg-cream">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <hr></hr>
                                        <p className="card-text">Brand Product</p><hr></hr>
                                        <div className='d-flex justify-content-md-center'>
                                            <button class="btn-or btn badge text-uppercase fs-6" type="button">get free</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <Footer />
            </div>


        </>

    );
}
