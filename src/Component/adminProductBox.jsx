import React from 'react';
import Button from 'react-bootstrap/Button';
import ProductEditModal from '../Component/modalDivContent';
import axios from 'axios';
export default function AdminProductBox({ product }) {

    const [modalShow, setModalShow] = React.useState(false);
    function handleClick(product) {
        const token = JSON.parse(localStorage.getItem('tokenAdmin'));
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
                            <div class="container">
                                <div class="row">
                                    <div class="col rounded-3 col-2">
                                        <div class="d-flex align-items-center">
                                            <img src={product.productImageBase64} className="img-fluid d-flex h-100" alt="..." />
                                        </div>
                                    </div>
                                    <div class="col m-2">
                                        <h4 className="card-title pt-3 fw-bold pb-2">{product.productName}</h4>
                                        <p className="card-text ">{product.productDescription}</p>
                                        <hr></hr>
                                        <h5 className="card-title fw-bold pb-2">Branch</h5>
                                        <p className="card-text">{product.productLocation}</p>
                                    </div>
                                    <div class="row col-3 ">
                                        <div class="col col-6 d-flex justify-content-end align-items-center" >
                                            {/* <Link to='/add_product' class="bi bi-pencil-square fs-3"></Link> */}
                                            <div>
                                                <Button variant="primary" onClick={() =>
                                                    setModalShow(true)

                                                }>
                                                    Modal
                                                </Button>
                                                <ProductEditModal
                                                    show={modalShow}
                                                    onHide={() => setModalShow(false)}
                                                    product={product}
                                                />
                                            </div>

                                        </div>
                                        <div class="col col-6 d-flex justify-content-center align-items-center">
                                            <form>
                                                <input type="hidden" />
                                                <div type='submit' class="bi bi-trash-fill fs-3" onClick={() => handleClick(product)}></div>
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