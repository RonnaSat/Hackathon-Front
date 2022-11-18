import React from 'react';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import Rating from '../Component/Rating';

export default function Review_product() {
    return (
        <>
            <Navbar />
            <div className='d-flex justify-content-center'>
                <div class="p-3 col-sm-7 ">
                    <div className='col-12 d-flex justify-content-center mb-4 pt-3'>
                        <h4 class="text-center fw-bold card-body3">REVIEW RODUCT</h4>
                    </div>
                    <div class="pb-4 pt-4 border bg-pp rounded-2 px-5">
                        <div class="row ">
                            <div class="col-12 col-md-4">
                                <div class="im-photo1 rounded-2 bg-white d-flex justify-content-center align-items-center p-3">
                                    <img src='./img/1.png' className="img-fluid rounded-start w-75" />
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
                            <h4 class="card-body3 fw-bold pt-5 pb-3">Your information</h4>
                            <form className="row g-3 needs-validation" noValidate>
                                <div className="col-md-4">
                                    <label htmlFor="validationCustom01" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="validationCustom01" required />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="validationCustom02" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="validationCustom02" required />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="validationCustom04" className="form-label">Gender</label>
                                    <select className="form-select" id="validationCustom04" required>
                                        <option selected disabled value>Choose...</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                                <div className="col-12 pb-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck" required />
                                        <label className="form-check-label" htmlFor="invalidCheck">
                                            Agree to terms and conditions
                                        </label>
                                    </div>
                                </div>
                            </form>
                            <hr></hr>
                            <h4 class="card-body3 fw-bold pb-3">Review</h4>
                            <Rating title={'Fragrance'} />
                            <Rating title={'Longevity'} />
                            <Rating title={'Concentration'} />
                            <Rating title={'Price'} />
                            <p className="card-title py-2 fw-bold pt-4 pb-3">Comment</p>
                            <div class="form-floating">
                                <textarea class="form-control h-100" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                                <label for="floatingTextarea2">Comment about product</label>
                            </div>
                            <div className='d-flex justify-content-center py-4 '>
                                <input className="btn btn-purple fw-bold btn-lg d-grid gap-2 col-6 mx-auto" type="submit" defaultValue="Submit" />
                            </div>    

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
}
