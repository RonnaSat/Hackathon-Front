import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ProductEditModal from '../Component/modalDivContent';
import axios from 'axios';
export default function AdminProductBox({ product, token }) {
    const [modalShow, setModalShow] = React.useState(false);

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

    const linktoReview = () => {
        window.location.href = `/review_admin/${productInfo.productName}`
    }
    function handleClick() {
        axios.delete(`http://localhost:8000/product/${product}`, {
            headers: {
                authorization: token
            }
        })
            .then((response) => {

                alert("Delete success");
                window.location.reload();
            }).catch((error) => {
                console.log(error);
                alert("Delete error");
            })

    } if (productInfo) {
        return (
            <>
                <div className="container d-flex justify-content-center col-12">
                    <div class="row d-flex justify-content-center pb-3 col-12">
                        <div class="col-8">
                            <div class="p-4 border bg-pp rounded-3 mb-5">
                                <div class="container ">
                                    <div class="row">
                                        <div class="col rounded-3 col-3">
                                            <div class="d-flex align-items-center">
                                                <img src={productInfo.productImageBase64} className="img-fluid d-flex h-100" alt="..." />
                                            </div>
                                        </div>
                                        <div class="col-7 m-2">
                                            <h4 className="card-title pt-3 fw-bold pb-2">{productInfo.productName}</h4>
                                            <p className="card-text ">{productInfo.productDescription}</p>
                                            <hr></hr>
                                            <h5 className="card-title fw-bold pb-2">Branch</h5>
                                            <p className="card-text">{productInfo.productLocation}</p>
                                            <hr></hr>
                                            <h5 className="card-title fw-bold pb-2">Quantity</h5>
                                            <p className="card-text">{productInfo.productQuantity}</p>
                                        </div>
                                        <div class="col justify-content-center align-items-center mt-3 ">

                                            <div class="col col d-flex justify-content-center ">
                                                <form>
                                                    <div onClick={linktoReview} type='submit' class="bi bi-pie-chart-fill fs-3 mt-2"></div>
                                                </form>
                                            </div>
                                            <div class="col d-flex justify-content-center" >
                                                {/* <Link to='/add_product' class="bi bi-pencil-square fs-3"></Link> */}
                                                <div>
                                                    <Button variant="" onClick={() =>
                                                        setModalShow(true)

                                                    }>
                                                        <i class="bi bi-pencil-square fs-3"></i>
                                                    </Button>
                                                    <ProductEditModal
                                                        show={modalShow}
                                                        onHide={() => setModalShow(false)}
                                                        product={productInfo}
                                                        token={token}
                                                    />
                                                </div>

                                            </div>
                                            <div class="col  d-flex justify-content-center">
                                                <form>
                                                    <div type='submit' class="bi bi-trash-fill fs-3 mt-2" onClick={() => handleClick()}></div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }


}