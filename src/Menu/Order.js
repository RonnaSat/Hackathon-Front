import React, { useState, useEffect, } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Receipt from './Receipt';
import Select from './Select';
import Home from './Home';
export default function Order() {
    const token = JSON.parse(localStorage.getItem('token'));
    const { productName } = useParams();
    const [receipt, setReceipt] = useState('');
    const [receiptStat, setReceiptStat] = useState('')
    useEffect(() => {
        async function getOrder() {
            const orders = await axios.get(
                `http://localhost:8000/order/getOrder`, {
                headers: {
                    authorization: token
                }
            }
            ).catch(function (err) {

                setReceiptStat(err.response.data)
            });
            setReceipt(orders?.data);
        }
        getOrder();
    }, [token]);
    console.log(receiptStat)

    if (!token) {
        window.location.href = "/login";
    } else {
        if (receipt) {
            return (
                <Receipt receipt={receipt} token={token} />
            );
        } else if (productName) {
            return (
                <Select productName={productName} />
            );
        } else if (receiptStat === "No Order" || receiptStat === "Order failed") {
            window.location.href = '/';
        }

    }
}
