import React from 'react';
import './Product.css';
const Product = ({product}) => {
    const {name, img, description, prices} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {prices}</p>
            <p><small>{description}</small></p>
            <button>Book: {name}</button>
        </div>
    );
};

export default Product;