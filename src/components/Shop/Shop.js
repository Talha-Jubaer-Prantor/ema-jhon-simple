import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10=fakeData.slice(0,10)
    const [products, setProduct]=useState(first10)
    return (
        <div className='shop-container'>
            <div className="products-container">
                
                    {
                        products.map(product => <Product productDetaile={product}></Product>)
                    }
                
            </div>

            <div className="cart-container">
                <h1>THis is cart</h1>
            </div>
          
        </div>
    );
};

export default Shop;