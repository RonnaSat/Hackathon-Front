import React from 'react';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';

export default function Home() {
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
                        <img src="./img/219285.jpg" className="d-block w-100 h-25rem" alt="./img/516021.jpg" />
                    </div>
                    <div className="carousel-item">
                        <img src="./img/284338.jpg" className="d-block w-100 h-25rem" alt="..." />
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
                <p class="text-center fw-bold card-body3 p-4 p-sm-5 rounded">PERFUME</p>
            </div>
            <div className='col-12 d-flex justify-content-center'>
                <div className='p-4 p-sm-5'>
                    <div className="card mb-3" style={{ maxWidth: 540 }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8 ">
                                <div className="card-body bg-cream">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-4 p-sm-5'>
                    <div className="card mb-3" style={{ maxWidth: 540 }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8 ">
                                <div className="card-body bg-cream">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            </div>


        </>

    );
}
