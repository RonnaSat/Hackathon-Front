import React from 'react';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarNav">
                        <ul className="navbar-nav d-flex justify-content-around align-items-center col-5">
                            <li className="nav-item">
                                <a className="nav-link active fw-bold" aria-current="page" href="#">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="#">PRODUCT</a>
                            </li>
                            <li className=" nav-item">
                                <div >
                                <img className='w-30' src='img/logo.png'></img>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="#">ORDER</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold">REVIEW</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );






}