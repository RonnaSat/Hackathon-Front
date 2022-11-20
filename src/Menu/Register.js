import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [rPwd, setRPwd] = useState('');
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

        if (pwd === rPwd) {
            e.preventDefault();
            const stat = await axios.post('http://localhost:8000/userRegister', {
                fName, lName, email, pwd
            }).catch(function (error) {
                setStatus(error.response.data)
            })
            if (stat?.data) {
                window.location.href = '/login';
            }
        } else {
            e.preventDefault();
            setStatus('PWD != RPWD')
        }
    };

    console.log(status)


    return (
        <>
            <div onLoad={onLoad} className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className='img my-5 d-flex justify-content-center'>
                            <img src='img/logo.png'></img>
                        </div>
                        <div className='my-5'>
                            <div className='btn-top mb-5 d-flex justify-content-between'>
                                <button type="button" class="btn-sky card-title btn-lg col-5 btn-login text-uppercase fw-bold border shadow-sm rounded " onClick={function () { window.location.href = '/login' }}>Sign In</button>
                                <button type="button" class="btn-pp card-title btn-lg col-5 btn-login text-uppercase fw-bold border shadow-sm rounded">Register</button>
                            </div>
                        </div>

                        <div className="card border-0 shadow-sm rounded-3 my-5 ">

                            <div className="card-body2 p-4 p-sm-5 rounded-3">
                                <div>
                                    <h5 className="card-title text-center mb-4 fw-light fs-5 text-uppercase fw-bold">Register</h5>
                                    <form onSubmit={onSubmit}>
                                        <div className=''>

                                        </div>
                                        <p className='fw-bold'>Please register your account</p>
                                        <div class="row">
                                            <div class="col">
                                                <div className="form-floating mb-3">
                                                    <input type="text" className="form-control" id="Name" placeholder="Name" onChange={handChange(setFName)} />
                                                    <label htmlFor="floatingInput">Name</label>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div className="form-floating mb-3">
                                                    <input type="text " className="form-control" id="Surname" placeholder="Surname" onChange={handChange(setLName)} />
                                                    <label htmlFor="floatingInput">Surname</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="Email address" placeholder="Email address" onChange={handChange(setEmail)} />
                                            <label htmlFor="floatingInput">Email address</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" id="password" placeholder="Password" onChange={handChange(setPwd)} />
                                            <label htmlFor="floatingPassword">Password</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" id="repeat-password" placeholder="Password" onChange={handChange(setRPwd)} />
                                            <label htmlFor="floatingPassword">Repeat password</label>
                                        </div>
                                        <div className="d-grid">
                                            <button className="btn-color btn-login text-uppercase fw-bold rounded border shadow-sm" type="submit">Register</button>
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
