import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const{productId} = useParams();
    const [product, setProduct]= useState({});

    useEffect( () =>{
        const url = `http://localhost:5000/item/${productId}`;

        fetch(url)
        .then(res=> res.json())
        .then(data => setProduct(data))
    }, []);
    return (
        <div>
            <h2>welcome! You are going to book: {product.name}</h2>
            <div className='text-center'>
            <Link to="/checkout">
                <button className='btn btn-primary'>proceed checkout</button>
            </Link>

            </div>
            
        </div>
    );
};

export default ProductDetail;