import React from 'react';

const Cart = (props) => {
    
        const cart=props.cart
        const totalPrice=cart.reduce((total,prdt)=>total+prdt.price,0)
        let shipping=0
        if(totalPrice>100){
            shipping=4.99
        }
        else if(totalPrice>50){
            shipping=6.99
        }
        else if(totalPrice>0){
             shipping =8.99
        }

        const vat=(totalPrice/10).toFixed(2)

        const grandTotal=(totalPrice+ shipping+Number(vat)).toFixed(2)
    return (
        <div>
            Ordered Item:{cart.length}
            <br />
            Product cost: {totalPrice.toFixed(2)}
            <br />
            <h4>Shipping Cost:{shipping}</h4>
            <br />
            <h4>Vat: {vat}</h4>

            Total price:{grandTotal}
        </div>
    );
};

export default Cart;