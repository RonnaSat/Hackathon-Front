import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Receipt from './Receipt';
import Select from './Select';

export default function Order() {
    const token = JSON.parse(localStorage.getItem('token'));
    const [receipt, setReceipt] = useState('');
    useEffect(() => {
        async function getOrder() {
            const orders = await axios.get(
                `http://localhost:8000/order/getOrder`, {
                headers: {
                    "x-access-token": token
                }
            }
            ).catch(function (err) {
                // console.log(err)
            });
            setReceipt(orders?.data);
        }
        getOrder();
    }, [token]);
    if (!token) {
        window.location.href = "/login";
    } else {
        if (receipt) {
            return (
                <Receipt receipt={receipt} />
            );
        } else {
            // setTimeout(function () {
            //     return (
            //         <Select />
            //     );
            // }, 1000)
            return (
                <Select />
            );
        }

    }
}
