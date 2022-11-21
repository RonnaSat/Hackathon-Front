import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarNav">
                        <ul className="navbar-nav d-flex justify-content-around align-items-center col-5">
                            <li className="nav-item">
                                <Link to="/" className="nav-link fw-bold text-decoration-none">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/order" className="nav-link fw-bold text-decoration-none">ORDER</Link>
                            </li>
                            <li className=" nav-item">
                                <div >
                                    <img className='w-30' src='../img/logo.png' alt=''></img>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link to="/review" className="nav-link fw-bold text-decoration-none">REVIEW</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link fw-bold text-decoration-none">LOGOUT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );






}