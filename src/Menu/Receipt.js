import React from 'react';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function Receipt({ receipt, token }) {
    const confirmClick = (e) => {
        e.preventDefault();
        if (receipt && token) {
            axios.put('http://localhost:8000/order/updateToReview', {
                _id: receipt._id
            }, {
                headers: {
                    authorization: token
                }
            }).catch(function (err) {
                console.log(err)
                alert('Sth Wrong')
            }).then(function () {
                alert('Confirmed receive')
                window.location.href = `/review`
            })
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (receipt && token) {
            axios.delete('http://localhost:8000/order/deleteOrder', {
                headers: {
                    authorization: token
                }
            })
            window.location.href = `/`
        }

    }
    console.log(receipt)
    return (
        <>
            <Navbar />
            <div className='d-flex justify-content-center'>
                <div class="p-3 col-sm-7 ">
                    <div class="pb-4 pt-4 border bg-pp rounded-2 ">
                        <div className='d-flex justify-content-center'>
                            <h4 className="card-title pb-4 fw-bold">GOODS RECEIPT</h4>
                        </div>
                        <div>
                            <div class="p-4 border bg-light">
                                <div className='d-flex justify-content-center col-12'>
                                    <div class="row justify-content-center">
                                        <div class="col-7">
                                            <h6 className="card-title pb-4 fw-bolder">GOODS RECEIPT</h6>
                                        </div>
                                        <div class="col-5">
                                            <h6 className="card-title pb-4"> 024158455474</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12'>

                                    <div class="row justify-content-center">
                                        <div class="user col-3 fw-bold d-flex justify-content-start">
                                            Name user
                                        </div>
                                        <div class="user col-4 ">
                                            {`${receipt.fName} ${receipt.lName}`}
                                        </div>
                                    </div>
                                    <div class="row justify-content-center">
                                        <div class="user col-3 fw-bold d-flex justify-content-start">
                                            Name product
                                        </div>
                                        <div class="user col-4">
                                            {receipt.productName}
                                        </div>
                                    </div>
                                    <div class="row justify-content-center">
                                        <div class="user col-3 fw-bold d-flex justify-content-start">
                                            Pickup branch
                                        </div>
                                        <div class="user col-4">
                                            {receipt.productLocation}
                                        </div>
                                    </div>
                                    <div class="row justify-content-center">
                                        <div class="user col-3 fw-bold d-flex justify-content-start">
                                            Time to pickup
                                        </div>
                                        <div class="user col-4">
                                            {receipt.productPickTime.split("T")[0]}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pt-3 d-flex justify-content-end'>
                        <form onSubmit={handleSubmit}><button class="btn btn-or m-3 fw-bold" type="submit">CANCEL</button></form>
                        <button onClick={confirmClick} class="btn btn-green m-3 fw-bold" type="submit">CONFIRM</button>

                    </div>
                </div>
            </div>

            <Footer />

        </>

    );
}
