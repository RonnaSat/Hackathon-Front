import React, { useState } from 'react';
import axios from 'axios';
export default function Signin() {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [token, setToken] = useState('');
    const [status, setStatus] = useState({});
    const onLoad = () => {
        localStorage.clear();
    }
    const handChange = (fn) => {
        return (event) => {
            fn(event.target.value);
        };
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        const stat = await axios.post('http://localhost:8000/adminLogin', {
            email, pwd
        }).catch(function (error) {
            setStatus(error.response.data)
        })
        if (stat?.data) {
            localStorage.setItem('token', JSON.stringify(stat.data))
            setToken(JSON.parse(localStorage.getItem('token')))
            window.location.href = '/';
        }
    };

    console.log(email, " ", pwd, " ", token)
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
                                <button type="button" class="btn-pp card-title btn-lg col-5 btn-login text-uppercase fw-bold border shadow-sm rounded" disabled>Register</button>
                            </div>
                        </div>

                        <div className="card border-0 shadow-sm rounded-3 my-5 ">

                            <div className="card-body p-4 p-sm-5 rounded">
                                <div>
                                    <h5 className="card-title text-center mb-4 fw-light fs-5 text-uppercase fw-bold">Sign In</h5>
                                    <form onSubmit={onSubmit}>
                                        <p className='fw-bold'>Please sing in to your account</p>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handChange(setEmail)} />
                                            < label htmlFor="floatingInput">Email address</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handChange(setPwd)} />
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
