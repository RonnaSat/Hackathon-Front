import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function HomeProductBox({ product }) {
    const [productInfo, setProductInfo] = useState('')
    useEffect(() => {
        async function getProducts() {
            const products = await axios.get(
                `http://localhost:8000/product/getByID/${product}`
            );
            setProductInfo(products.data);
        }
        getProducts();
    }, [product]);
    if (productInfo) {
        return (
            <div className='p-4  p-sm-5 d-flex justify-content-center'>
                <div className="card mb-2" style={{ maxWidth: 540 }}>
                    <div className="row g-0 ">
                        <div className="col-md-4 btn-pp align-items-center d-flex">
                            <div class="d-flex ">
                                <img src={productInfo.productImageBase64} className="img-fluid rounded-start" alt="..." />
                            </div>
                        </div>
                        <div className="col-md-8 ">
                            <div className="card-body bg-cream">
                                <h5 className="card-title">{productInfo.productName}</h5>
                                <p className="card-text text-truncate">{productInfo.productDescription}</p>
                                <hr></hr>
                                <p className="card-text">You can get this product for free.</p>
                                <hr></hr>
                                <div className='d-flex justify-content-md-center'>
                                    <Link to={`/order/${productInfo.productName}`} class="btn-or btn badge text-uppercase fs-6" type="submit">get free</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
