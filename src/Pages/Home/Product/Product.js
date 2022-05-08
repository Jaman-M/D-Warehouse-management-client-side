import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';
const Product = ({product}) => {
    const {id,name, img, description, prices} = product;
    const navigate = useNavigate();
    const navigateToProductDetail=id =>{
        navigate(`/product/${id}`);

    }
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {prices}</p>
            <p><small>{description}</small></p>
            <button onClick={()=>navigateToProductDetail(id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Product;