import React from 'react';
import Sidebar from '../Component/Sidebar';

export default function Add_product() {
    return (
        <><Sidebar />
            <div class="content">
                <div>
                    <div className='img my-4 d-flex justify-content-center'>
                        <img src='img/logo.png'></img>
                    </div>
                    <div className='col-12 d-flex justify-content-center mb-4'>
                        <h4 class="text-center fw-bold card-body3">ADD PRODUCT</h4>
                    </div>
                    <div className='d-flex justify-content-center col-12'>
                        <div className='col-9 '>
                            <div class="row m-2">
                                <div class="im-photo col-5 rounded-4 bg-white ">
                                    <div className='d-flex justify-content-center align-items-center h-100'><i class="bi bi-plus fs-2"></i></div>
                                </div>
                                <div class="inform col-7">
                                    <div>
                                        <div class="container ">
                                            <div class="col m-1">
                                                <div className="col mb-3">
                                                    <div className='d-flex justify-content-start'>
                                                        <h5 className='card-body3 fw-bold'>Name product</h5>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                                        <label htmlFor="floatingInput">Add name product</label>
                                                    </div>

                                                </div>
                                                <div className="col mb-3">
                                                    <div className=' d-flex justify-content-start'>
                                                        <h5 className='card-body3 fw-bold'>Description of product</h5>
                                                    </div>
                                                    <div class="form-floating">
                                                        <textarea class="form-control h-100" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                                                        <label for="floatingTextarea2">Add description</label>
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
                                                <div class="col mb-3">
                                                    <div class="col mb-3">
                                                        <h5 class="card-body3 fw-bold">Add location and number of product</h5>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                                        <label htmlFor="floatingInput">Add branch</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                                        <label htmlFor="floatingInput">Number of products</label>
                                                    </div>
                                                </div>
                                                <div class="d-grid gap-2 col-3 mx-auto">
                                                    <button class="btn btn-green fw-bold" type="button">Add location and number</button>
                                                </div>
                                                <div class="p-4 border btn-sky rounded-3 my-4">
                                                    <h4 className="card-title d-flex justify-content-center fw-bold">Branches and number of products</h4>
                                                    <div class="row my-2">
                                                        <div class="col px-5 fs-5">
                                                            Branch
                                                        </div>
                                                        <div class="col d-flex justify-content-end px-5 fs-5">
                                                            Item
                                                        </div>
                                                    </div>
                                                    <div class="row my-2">
                                                        <div class="col px-5">
                                                            EVEANDBOY MAYA CNX
                                                        </div>
                                                        <div class="col d-flex justify-content-end px-5">
                                                            100
                                                        </div>
                                                    </div>
                                                </div>
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

                                    </div>
                                    <div class="d-grid gap-2 col-5 mx-auto my-4 ">
                                        <button class="btn btn-purple fw-bold" type="button">ADD NEW PRODUCT</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

