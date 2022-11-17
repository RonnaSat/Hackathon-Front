import React from 'react';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';

export default function Review_product() {
    return (
        <>
            <Navbar />
            <div className='d-flex justify-content-center'>
                <div class="p-3 col-sm-7 ">
                    <div class="pb-4 pt-4 border bg-pp rounded-2 px-5">
                        <div class="row ">
                            <div class="col">
                                <div class="im-photo1 rounded-2 bg-white d-flex justify-content-center align-items-center p-3">
                                    <img src='./img/112.png' className="img-fluid rounded-start w-75" />
                                </div>
                            </div>
                            <div class="col p-2">
                                <h4 className="card-title fw-bold">NAME PRODUCT</h4>
                                <h5 className="card-title py-2">Product brand</h5>
                                <p className="card-title py-1">Remove.bg is a free service to remove the
                                    background of any photo. It works 100%
                                    automatically: You don't have 
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />

        </>

    );
}
