import React from 'react';
import Sidebar from '../Component/Sidebar';

export default function Product_admin() {
    return (
        <><Sidebar/>
            <div class="content">
            <div>
                <div className='img my-5 d-flex justify-content-center'>
                    <img src='img/logo.png'></img>
                </div>
                <div className='col-12 d-flex justify-content-center'>

                    <div className='p-4 p-sm-5'>
                        <div className="card mb-3" style={{ maxWidth: 540 }}>
                            <div className="row g-0">
                                <div className="col-md-4 btn-pp align-items-center d-flex">
                                    <div class="d-flex ">
                                        <img src='./img/1.png' className="img-fluid rounded-start" alt="..." />
                                    </div>
                                </div>
                                <div className="col-md-8 ">
                                    <div className="card-body bg-cream">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <hr></hr>
                                        <p className="card-text">Brand Product</p>
                                        <hr></hr>
                                        <div className='d-flex justify-content-md-center'>
                                            <button class="btn btn-outline-secondary btn badge text-uppercase fs-6" type="button" disabled>get free</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='p-4 p-sm-5'>
                        <div className="card mb-3" style={{ maxWidth: 540 }}>
                            <div className="row g-0">
                                <div className="col-md-4 btn-pp align-items-center d-flex">
                                    <div class="d-flex ">
                                        <img src='./img/2.png' className="img-fluid rounded-start" alt="..." />
                                    </div>
                                </div>
                                <div className="col-md-8 ">
                                    <div className="card-body bg-cream">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <hr></hr>
                                        <p className="card-text">Brand Product</p><hr></hr>
                                        <div className='d-flex justify-content-md-center'>
                                            <button class="btn btn-outline-secondary btn badge text-uppercase fs-6" type="button" disabled>get free</button>
                                        </div>
                                    </div>
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
