import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products,setProducts] = useState([])

    useEffect( ()=>{
        fetch('http://localhost:5000/item')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className=''  >
            <h2 id='items' className='text-primary text-center mt-5 mb-2'>Available products item : {products.length}</h2>
            <div className='products-container container'>
            {
                products.map(product => <Product
                    key={product._id}
                    product={product}
                >

                </Product>)
            }
            </div>
        </div>
    );
};

export default Products;