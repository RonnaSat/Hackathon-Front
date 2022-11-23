import React, { useEffect, useState } from 'react';
import Sidebar from '../Component/Sidebar';
import PieRechartComponent from "../Component/PieRechartComponent";
import { useParams } from 'react-router-dom';
import axios from 'axios';


export default function Review_admin() {
    const token = JSON.parse(localStorage.getItem('tokenAdmin'));
    if (!token) window.location.href = '/signin-admin';

    const [reviewData, setReviewData] = useState('');
    const { productName } = useParams();

    useEffect(() => {
        async function getProducts() {
            axios.get(`http://localhost:8000/review/getByProductName/${productName}`, {
                headers: {
                    authorization: token
                }
            }
            ).catch(function () {
                alert('Sth wrong')
                window.location.href = '/home_admin';
            }).then((res) => setReviewData(res.data));

        }
        getProducts();
    }, [token, productName]);


    if (reviewData) {
        const x = reviewData.reviews.map(a => a.fragrance)
        console.log(x)
        if (reviewData.reviews.length > 0) {
            return (
                <>
                    <Sidebar />
                    <div class="content">
                        <div className='img my-3 d-flex justify-content-center'>
                            <img src='../img/logo.png'></img>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <div class="p-3 col-sm-8 ">
                                <div class="pb-4 pt-4 border bg-pp rounded-3 px-5">
                                    <div class="row ">
                                        <div class="col-12 col-md-4">
                                            <div class="im-photo1 rounded-3 bg-white d-flex justify-content-center align-items-center p-3">
                                                <img src={reviewData.productInfo.productImageBase64} className="img-fluid rounded-start w-75" />
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-8 py-4">
                                            <div className='row'>
                                                <h4 className="card-title fw-bold py-2">{reviewData.productInfo.productName}</h4>
                                                <h5 className="card-title py-2"></h5>
                                                <p className="card-title py-2">{reviewData.productInfo.productDescription}
                                                </p>
                                                <h5 className="card-title py-2">Contact</h5>
                                                <div class="social">
                                                    <a href={reviewData.productInfo.productContacts[0]}><i class="iconn1 pe-3 bi bi-instagram"></i></a>
                                                    <a href={reviewData.productInfo.productContacts[1]}><i class="iconn1 px-3 bi bi-facebook"></i></a>
                                                    <a href={reviewData.productInfo.productContacts[2]}><i class="iconn1 px-3 bi bi-twitter"></i></a>
                                                    <a href={reviewData.productInfo.productContacts[3]}><i class="iconn1 px-3 bi bi-google"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div classname="d-flex justify-content-start col-6">
                                        <div className='col-12 d-flex justify-content-center mb-4 pt-5 '>
                                            <h4 class="text-center fw-bold card-body3">REVIEW PODUCT</h4>
                                        </div>
                                        <div className='col-12 d-flex justify-content-around'>
                                            <div className="rating px-2">
                                                <input className="form-check-input bg-dg mx-2" type="box" />
                                                <label className="form-check-label" >
                                                    1  Very Unsatisfied
                                                </label>
                                            </div>
                                            <div className="rating px-2">
                                                <input className="form-check-input bg-or mx-1" type="box" />
                                                <label className="form-check-label" >
                                                    2  Unsatisfied
                                                </label>
                                            </div>
                                            <div className="rating px-2">
                                                <input className="form-check-input bg-pp mx-1" type="box" />
                                                <label className="form-check-label" >
                                                    3  Neutral
                                                </label>
                                            </div>
                                            <div className="rating px-2">
                                                <input className="form-check-input bg-sk mx-1" type="box" />
                                                <label className="form-check-label" >
                                                    4  Satisfied
                                                </label>
                                            </div>

                                            <div className="rating px-2">
                                                <input className="form-check-input bg-gn mx-1" type="box" />
                                                <label className="form-check-label" >
                                                    5 Very Satisfied
                                                </label>
                                            </div>
                                        </div>

                                        <div class="container text-center d-flex justify-content-start">
                                            <div class="row row-cols-2 d-flex justify-content-start">

                                                <div class="col"><h5 className=' d-flex justify-content-center mt-5 card-body3 fw-bold'>Fragrance</h5><PieRechartComponent reviewData={reviewData.reviews.map(a => a.fragrance)} /></div>
                                                <div class="col"><h5 className=' d-flex justify-content-center mt-5 card-body3 fw-bold'>Longevity</h5><PieRechartComponent reviewData={reviewData.reviews.map(a => a.longevity)} /></div>
                                                <div class="col"><h5 className=' d-flex justify-content-center mt-5 card-body3 fw-bold'>Concentration</h5><PieRechartComponent reviewData={reviewData.reviews.map(a => a.concentration)} /></div>
                                                <div class="col"><h5 className=' d-flex justify-content-center mt-5 card-body3 fw-bold'>Price</h5><PieRechartComponent reviewData={reviewData.reviews.map(a => a.price)} /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row pt-4'>
                                    <div classname="d-flex justify-content-start col-6">
                                        <hr></hr>
                                        <h5 class="card-body3 fw-bold pt-4 pb-3">Comment</h5>
                                        <div>
                                            <div class="container text-start">
                                                {reviewData.reviews.map((review, index) => {
                                                    if (index < 2) {
                                                        return (
                                                            < div className="row" >
                                                                <div className="col-1">
                                                                    <i class="bi bi-person-circle fs-1"></i>
                                                                </div>
                                                                <div className="col-8">
                                                                    <h5 className="card-title py-2">{`${review.fName} ${review.lName}`}</h5>
                                                                    <p>{review.comment}</p>
                                                                </div>
                                                            </div>
                                                        )
                                                    } return <></>
                                                }
                                                )}
                                                <div class="d-grid gap-2 d-md-flex justify-content-md-end py-4">
                                                    <button class="btn btn-purple2 fs-5" type="button">{`Download review data (upcoming)`}</button>

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
        } else if (reviewData.reviews.length === 0) {
            return (<>
                <Sidebar />
                <div class="content">
                    <div className='img my-3 d-flex justify-content-center'>
                        <img src='../img/logo.png'></img>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div class="p-3 col-sm-8 ">
                            <div class="pb-4 pt-4 border bg-pp rounded-3 px-5">
                                <div class="row ">
                                    <div class="col-12 col-md-4">
                                        <div class="im-photo1 rounded-3 bg-white d-flex justify-content-center align-items-center p-3">
                                            <img src={reviewData.productInfo.productImageBase64} className="img-fluid rounded-start w-75" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-8 py-4">
                                        <div className='row'>
                                            <h4 className="card-title fw-bold py-2">{reviewData.productInfo.productName}</h4>
                                            <h5 className="card-title py-2"></h5>
                                            <p className="card-title py-2">{reviewData.productInfo.productDescription}
                                            </p>
                                            <h5 className="card-title py-2">Contact</h5>
                                            <div class="social">
                                                <a href={reviewData.productInfo.productContacts[0]}><i class="iconn1 pe-3 bi bi-instagram"></i></a>
                                                <a href={reviewData.productInfo.productContacts[1]}><i class="iconn1 px-3 bi bi-facebook"></i></a>
                                                <a href={reviewData.productInfo.productContacts[2]}><i class="iconn1 px-3 bi bi-twitter"></i></a>
                                                <a href={reviewData.productInfo.productContacts[3]}><i class="iconn1 px-3 bi bi-google"></i></a>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <h4 class="text-center fw-bold card-body3 mt-5">NO REVIEW</h4>
                        </div>
                    </div>
                </div>
            </>)
        }

    }

}


