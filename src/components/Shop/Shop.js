import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10=fakeData.slice(0,10)

    const [cart,setCart]=useState([])

    const [products, setProduct]=useState(first10)
    const handleAddProduct=(productDetail)=>{
        console.log('Product added',productDetail)
        const newCart=[...cart,productDetail]
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                
                    {
                        products.map(product => <Product handleAddProduct={handleAddProduct} productDetail={product}></Product>)
                    }
                
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
          
        </div>
    );
};

export default Shop;