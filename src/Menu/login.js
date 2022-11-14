import React from 'react';

export default function Login() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className='img my-5 d-flex justify-content-center'>
                            <img src='img/logo.png'></img>
                        </div>
                        <div className='my-5'>
                            <div className='btn-top mb-5 d-flex justify-content-between'>
                                <button type="button" class="btn-sky card-title btn-lg col-5 btn-login text-uppercase fw-bold border shadow-sm rounded ">Sign In</button>
                                <button type="button" class="btn-pp card-title btn-lg col-5 btn-login text-uppercase fw-bold border shadow-sm rounded">Register</button>
                            </div>
                        </div>

                        <div className="card border-0 shadow-sm rounded-3 my-5 ">

                            <div className="card-body p-4 p-sm-5 rounded">
                                <div>
                                    <h5 className="card-title text-center mb-4 fw-light fs-5 text-uppercase fw-bold">Sign In</h5>
                                    <form>
                                        <p className='fw-bold'>Please sing in to your account</p>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label htmlFor="floatingInput">Email address</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                            <label htmlFor="floatingPassword">Password</label>
                                        </div>

                                        <div className="d-grid">
                                            <button className="btn-color btn-login text-uppercase fw-bold rounded border shadow-sm" type="submit">Sign in</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}
