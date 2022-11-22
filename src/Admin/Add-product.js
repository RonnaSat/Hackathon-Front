import React, { useState, useRef } from 'react';
import Sidebar from '../Component/Sidebar';
import axios from 'axios';

export default function Add_product({ product }) {
    const token = JSON.parse(localStorage.getItem('tokenAdmin'));
    if (!token) window.location.href = 'signin-admin';
    const [productName, setProductName] = useState('')
    const [productLocation, setProductLocation] = useState('')
    const [productQuantity, setProductQuantity] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productContacts, setProductContact] = useState(['', '', '', ''])
    const [productImageBase64, setProductImageBase64] = useState('')
    const inputFileRef = useRef(null)
    const fileToBase64 = (filename, filepath) => {
        return new Promise((resolve) => {
            var file = new File([filename], filepath);
            var reader = new FileReader(); // Read file content on file loaded event
            reader.onload = function (event) {
                resolve(event.target.result);
            }; // Convert data to base64
            reader.readAsDataURL(file);
        });
    };
    const imgHandChange = async (e) => {
        setProductImageBase64(await fileToBase64(inputFileRef.current.files[0]))
        console.log(productImageBase64)
    };
    const handChange = (fn) => {
        return (event) => {
            fn(event.target.value);
        };
    };
    const arrChange = (i) => {
        return (e) => {
            productContacts[i] = e.target.value;
            setProductContact(productContacts);
        }
    }
    const onClick = async (e) => {

        e.preventDefault();
        const stat = await axios.post('http://localhost:8000/product/addProduct', {
            productName, productLocation, productQuantity, productDescription, productContacts, productImageBase64
        }, {
            headers: {
                authorization: token
            }
        }).catch(function (error) {
            console.log(error.response.data)
        })
        console.log(stat)

    }

    console.log(productName, productLocation, productQuantity, productDescription, productContacts, productImageBase64);
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
                            <div class="row m-2 d-flex justify-content-center">
                                <label for="fileImgAddimg" className="d-flex justify-content-end bg-white border col-5 col-sm-4 rounded-3 p-2 mb-3 align-items-center">
                                    <div className=' d-flex justify-content-center'>
                                        <input type="file" name="file" id="fileImgAddimg" ref={inputFileRef} onChange={imgHandChange}></input>
                                    </div>
                                </label>

                                <div class="inform col">
                                    <div>
                                        <div class="container ">
                                            <div class="col m-1">
                                                <div className="col mb-3">
                                                    <div className='d-flex justify-content-start'>
                                                        <h5 className='card-body3 fw-bold'>Name product</h5>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input onChange={handChange(setProductName)} type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                                        <label htmlFor="floatingInput">Add name product</label>
                                                    </div>

                                                </div>
                                                <div className="col mb-3">
                                                    <div className=' d-flex justify-content-start'>
                                                        <h5 className='card-body3 fw-bold'>Description of product</h5>
                                                    </div>
                                                    <div class="form-floating">
                                                        <textarea onChange={handChange(setProductDescription)} class="form-control h-100" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
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
                                                        <input onChange={handChange(setProductLocation)} type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                                        <label htmlFor="floatingInput">Add branch</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input onChange={handChange(setProductQuantity)} type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                                        <label htmlFor="floatingInput">Number of products</label>
                                                    </div>
                                                </div>

                                                <h5 class="card-body3 fw-bold">Contact</h5>
                                                <div className="input-group input-group-sm mb-3 col-12">
                                                    <div className='contact d-flex justify-content-around row'>

                                                        <div className="col input-group input-group-sm ">
                                                            <a href="#"><i class="iconn1 bi bi-instagram me-3"></i></a>
                                                            <input onChange={arrChange(0)} type="text" className="form-control rounded-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                                        </div>

                                                        <div className="col input-group input-group-sm ">
                                                            <a href="#"><i class="iconn1 bi bi-facebook m-3 "></i></a>

                                                            <input type="text" onChange={arrChange(1)} className="form-control rounded-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                                        </div>
                                                        <div className="col input-group input-group-sm ">
                                                            <a href="#"><i class="iconn1 bi bi-twitter m-3"></i></a>

                                                            <input type="text" onChange={arrChange(2)} className="form-control rounded-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                                        </div>

                                                        <div className="col input-group input-group-sm ">
                                                            <a href="#"><i class="iconn1 bi bi-google m-3 "></i></a>
                                                            <input type="text" onChange={arrChange(3)} className="form-control rounded-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="d-grid gap-2 col-5 mx-auto my-5 ">
                                        <button onClick={onClick} class="btn btn-purple fw-bold" type="button">ADD NEW PRODUCT</button>
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

