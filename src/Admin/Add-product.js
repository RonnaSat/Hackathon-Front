import React from 'react';

export default function Add_product() {
    return (
        <>
            <div>
                <div className='img my-5 d-flex justify-content-center'>
                    <img src='img/logo.png'></img>
                </div>
                <div className='col-12 d-flex justify-content-center mb-4'>
                    <h4 class="text-center fw-bold card-body3">ADD PRODUCT</h4>
                </div>
                <div className='d-flex justify-content-center col-12'>
                    <div className='col-8'>
                        <div class="row m-5">
                            <div class="im-photo col-6 rounded-4 bg-white ">
                                <div className='d-flex justify-content-center align-items-center h-100'><i class="bi bi-plus fs-2"></i></div>
                            </div>
                            <div class="inform col-6">
                                <div>
                                    <div class="container m-1">
                                        <div class="col m-1">
                                            <div className="col mb-3">
                                                <h5 class="card-body3 fw-bold">Add name product</h5>
                                                <div className="input-group input-group-sm ">
                                                    <input type="text" className="form-control rounded-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                                </div>
                                            </div>

                                            <div class="col mb-3">
                                                <h5 class="card-body3 fw-bold">Add location</h5>
                                                <div className="input-group input-group-sm ">
                                                    <input type="text" className="form-control rounded-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                                </div>
                                            </div>
                                            <div class="col mb-3">
                                                <h5 class="card-body3 fw-bold">Add description</h5>
                                                <div className="input-group input-group-sm ">
                                                    <input type="text" className="form-control rounded-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                                </div>
                                            </div>
                                            <div class="col mb-3">
                                                <h5 class="card-body3 fw-bold">Number of products</h5>
                                                <div className="input-group input-group-sm ">
                                                    <input type="text" className="form-control rounded-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="container pe-4 ps-0">
                                <div class="col">
                                    <div class="col mb-3">
                                        <div class="col mb-3 mt-3">
                                            <h5 class="card-body3 fw-bold">Contact</h5>
                                            <div className="input-group input-group-sm mb-3">
                                                <div className='contact d-flex justify-content-start row'>

                                                    <div className="col input-group input-group-sm ">
                                                        <a href="#"><i class="iconn1 bi bi-instagram me-3"></i></a>
                                                        <input type="text" className="form-control rounded-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                                    </div>

                                                    <div className="col input-group input-group-sm ">
                                                        <a href="#"><i class="iconn1 bi bi-facebook m-3 "></i></a>

                                                        <input type="text" className="form-control rounded-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                                    </div>
                                                    <div className="col input-group input-group-sm ">
                                                        <a href="#"><i class="iconn1 bi bi-twitter m-3"></i></a>

                                                        <input type="text" className="form-control rounded-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                                    </div>

                                                    <div className="col input-group input-group-sm ">
                                                        <a href="#"><i class="iconn1 bi bi-google m-3 "></i></a>

                                                        <input type="text" className="form-control rounded-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col mb-3">
                                        <div class="col mb-3">
                                            <h5 class="card-body3 fw-bold">Contact</h5>
                                            <div className="input-group input-group-sm mb-3">
                                                <input type="text" className="form-control rounded-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div></div>

            </div>
        </>
    );
}

