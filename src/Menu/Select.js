import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';

export default function Select({ productName }) {
    if (!productName) window.location.href = "/";
    const [product, setProduct] = useState([])
    const token = JSON.parse(localStorage.getItem('token'));
    const [productLocation, setProductLocation] = useState('');
    const [productPickTime, setProductPickTime] = useState('');
    const handChange = (fn) => {
        return (event) => {
            fn(event.target.value);
        };
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (productName && productLocation && productPickTime) {
            console.log(token)
            const stat = await axios.post('http://localhost:8000/order/addOrder', {
                productName, productLocation, productPickTime
            }, {
                headers: {
                    authorization: token
                }
            }).catch(function (error) {
                console.log(error)
            })
            if (stat) {
                window.location.href("/order")
            }
        }

    };
    useEffect(() => {
        async function getProduct() {
            const product = await axios.get(
                `http://localhost:8000/product/getByName/${productName}`, {
                headers: {
                    "x-access-token": token
                }
            }
            ).catch(function (err) {
                console.log(err)
            });
            setProduct(product?.data);
        }
        getProduct();
    }, [token, productName]);
    if (product.length > 0) {
        return (
            <>
                <Navbar />
                <div class="container">
                    <div className='d-flex justify-content-center'>
                        <div class="text-center">
                            <img className="img-thumbnail bg-transparent border-0 promo-image" src={product[0].productImageBase64} alt='' />
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="p-3 col-sm-7 ">
                            <h3 className="card-title my-3">{product[0].productName}</h3>
                            <h5 className="card-title my-2">Product brand</h5>
                            <p className="card-text">{product[0].productDescription}</p>
                            <h6 className="card-title my-3">Contact</h6>
                            <div class="social ">
                                <a href="#"><i class="iconn-se bi bi-instagram me-4"></i></a>
                                <a href="#"><i class="iconn-se bi bi-facebook me-4"></i></a>
                                <a href="#"><i class="iconn-se bi bi-twitter me-4"></i></a>
                                <a href="#"><i class="iconn-se bi bi-google me-4"></i></a>
                            </div>
                        </div>
                        <div class="p-3 col-sm-4">
                            <div class="col">
                                <div class="p-4 border bg-pp rounded-3">
                                    <h5 className="card-title">{product[0].productName}</h5>
                                    <p className="card-text">This is a wider card with supporting text </p>
                                    <hr></hr>
                                    <div>
                                        <p className="card-text my-2">Select information</p>
                                        <select onChange={handChange(setProductLocation)} class="form-select form-select-sm my-2 rounded-3" aria-label=".form-select-sm example">
                                            <option selected>Select Branch</option>
                                            {product.map((prod) => <option value={prod.productLocation}>{prod.productLocation}</option>)}
                                        </select>
                                        <select onChange={handChange(setProductPickTime)} class="form-select form-select-sm rounded-3" aria-label=".form-select-sm example">
                                            <option selected>Select a date</option>
                                            <option value="2022-11-30">One</option>
                                            <option value="2022-12-01">Two</option>
                                            <option value="2022-12-02">Three</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="p-3 col-sm-7 ">
                        </div>
                        <div class="p-4 col-sm-4 d-flex justify-content-center">
                            <form onSubmit={onSubmit}><button type="submit" class="btn btn-green fw-bold" >BOOK NOW</button></form>
                        </div>
                    </div>
                </div>
                <Footer />
            </>

        );
    }

}
