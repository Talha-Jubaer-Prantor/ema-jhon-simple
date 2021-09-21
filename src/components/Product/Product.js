import { icon } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img,name,seller,stock,price}=props.productDetail
    return (
        <div className='product'>
         <div>
            <img src={img} alt="" />
         </div>

         <div className='product-info'>
            <h4 className='product-name'>{name}</h4>
            <br />
            <p>Price: {price}</p>
            <p>By: {seller}</p>
            <p>Only {stock} left in stock -Order soon</p>
            <button className='main-btn' onClick={()=>props.handleAddProduct(props.productDetail)}>
                <FontAwesomeIcon icon={faShoppingCart}/> Buy now
            </button>
         </div>
        </div>
    );
};

export default Product;