import React from 'react';
import Footer from '../Component/Footer';
import Sidebar from '../Component/Sidebar';
import PieRechartComponent from "../Component/PieRechartComponent";

export default function Review_admin() {
    return (
        <>
            <Sidebar />
            <div class="content">
                <div className='img my-5 d-flex justify-content-center'>
                    <img src='img/logo.png'></img>
                </div>
                <div className='d-flex justify-content-center'>
                    <div class="p-3 col-sm-7 ">

                        <div class="pb-4 pt-4 border bg-pp rounded-3 px-5">
                            <div class="row ">
                                <div class="col-12 col-md-4">
                                    <div class="im-photo1 rounded-3 bg-white d-flex justify-content-center align-items-center p-3">
                                        <img src='./img/3.png' className="img-fluid rounded-start w-75" />
                                    </div>
                                </div>
                                <div class="col-12 col-md-8 py-4">
                                    <div className='row'>
                                        <h4 className="card-title fw-bold py-2">NAME PRODUCT</h4>
                                        <h5 className="card-title py-2">Product brand</h5>
                                        <p className="card-title py-2">Remove.bg is a free service to remove the
                                            background of any photo. It works 100%
                                            automatically: You don't have
                                        </p>
                                        <h5 className="card-title py-2">Contact</h5>
                                        <div class="social">
                                            <a href="#"><i class="iconn1 pe-3 bi bi-instagram"></i></a>
                                            <a href="#"><i class="iconn1 px-3 bi bi-facebook"></i></a>
                                            <a href="#"><i class="iconn1 px-3 bi bi-twitter"></i></a>
                                            <a href="#"><i class="iconn1 px-3 bi bi-google"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div classname="d-flex justify-content-start col-6">
                                <div className='col-12 d-flex justify-content-center mb-4 pt-5 '>
                                    <h4 class="text-center fw-bold card-body3">REVIEW PODUCT</h4>
                                </div>
                                <div class="container text-center d-flex justify-content-start">
                                    <div class="row row-cols-2 d-flex justify-content-start">
                                        <div class="col"><PieRechartComponent /></div>
                                        <div class="col"><PieRechartComponent /></div>
                                        <div class="col"><PieRechartComponent /></div>
                                        <div class="col"><PieRechartComponent /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row pt-4'>
                            <div classname="d-flex justify-content-start col-6">
                                <hr></hr>
                                <h5 class="card-body3 fw-bold pt-4 pb-3">Comment</h5>
                                <div>
                                    <div class="container text-start">
                                        <div className="row">
                                            <div className="col-1">
                                                <i class="bi bi-person-circle fs-1"></i>
                                            </div>
                                            <div className="col-8">
                                                <h5 className="card-title py-2">User name</h5>
                                                <p>Use the scaling classes for larger or smaller rounded corners. Sizes range from 0 to 3, and can be configured by modifying the utilities API.</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-1">
                                                <i class="bi bi-person-circle fs-1"></i>
                                            </div>
                                            <div className="col-8">
                                                <h5 className="card-title py-2">User name</h5>
                                                <p>Use the scaling classes for larger or smaller rounded corners. Sizes range from 0 to 3, and can be configured by modifying the utilities API.</p>
                                            </div>
                                        </div>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-end py-4">
                                            <button class="btn btn-purple2 fs-5" type="button">Download review data</button>

                                        </div>

                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}
