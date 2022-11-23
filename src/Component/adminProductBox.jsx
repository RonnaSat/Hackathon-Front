import React from 'react';
import Button from 'react-bootstrap/Button';
import ProductEditModal from '../Component/modalDivContent';
import axios from 'axios';
export default function AdminProductBox({ product, token }) {
    const [modalShow, setModalShow] = React.useState(false);

    const linktoReview = () => {
        window.location.href = `/review_admin/${product.productName}`
    }
    function handleClick(product) {
        axios.delete(`http://localhost:8000/product/${product._id}`, {
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

    }
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
                                            <img src={product.productImageBase64} className="img-fluid d-flex h-100" alt="..." />
                                        </div>
                                    </div>
                                    <div class="col-7 m-2">
                                        <h4 className="card-title pt-3 fw-bold pb-2">{product.productName}</h4>
                                        <p className="card-text ">{product.productDescription}</p>
                                        <hr></hr>
                                        <h5 className="card-title fw-bold pb-2">Branch</h5>
                                        <p className="card-text">{product.productLocation}</p>
                                        <hr></hr>
                                        <h5 className="card-title fw-bold pb-2">Quantity</h5>
                                        <p className="card-text">{product.productQuantity}</p>
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
                                                    product={product}
                                                    token={token}
                                                />
                                            </div>

                                        </div>
                                        <div class="col  d-flex justify-content-center">
                                            <form>
                                                <div type='submit' class="bi bi-trash-fill fs-3 mt-2" onClick={() => handleClick(product)}></div>
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