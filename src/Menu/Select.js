import React from 'react';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';

export default function Select() {
    return (
        <>
            <Navbar />
            <div class="container">
                <div className='d-flex justify-content-center'>
                    <div class="text-center">
                        <img className="img-thumbnail bg-transparent border-0 promo-image" src='./img/113.png' />
                    </div>
                </div>
                <div class="row d-flex justify-content-center">
                    <div class="p-3 col-sm-7 ">
                        <h3 className="card-title my-3">NAME PRODUCT</h3>
                        <h5 className="card-title my-2">Product brand</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
                        <h6 className="card-title my-3">Contact</h6>
                        <div class="social ">
                            <a href="#"><i class="iconn-se bi bi-instagram me-4"></i></a>
                            <a href="#"><i class="iconn-se bi bi-facebook me-4"></i></a>
                            <a href="#"><i class="iconn-se bi bi-twitter me-4"></i></a>
                            <a href="#"><i class="iconn-se bi bi-google me-4"></i></a>
                        </div>
                    </div>
                    <div class="p-3 col-sm-4">
                        <div class="col">
                            <div class="p-4 border bg-pp rounded-3">
                                <h5 className="card-title">Name Product</h5>
                                <p className="card-text">This is a wider card with supporting text </p>
                                <hr></hr>
                                <div>
                                    <p className="card-text my-2">Select Branch</p>
                                    <select class="form-select form-select-sm my-2 rounded-3" aria-label=".form-select-sm example">
                                        <option selected>Select Branch</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <select class="form-select form-select-sm rounded-3" aria-label=".form-select-sm example">
                                        <option selected>Select a date</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row d-flex justify-content-center">
                    <div class="p-3 col-sm-7 ">
                    </div>
                    <div class="p-4 col-sm-4 d-flex justify-content-center">
                        <button type="button" class="btn btn-green fw-bold">BOOK NOW</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
}
