import React from 'react';

import './Cart.css'

const Cart = (props) => {

    const cart = props.cart;
    let total =0;

    // const total  = cart.reduce((total, prd)=> total+prd.price*prd*quantity, 0);
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price* product.quantity;
        
    }
    let shipping = 0;
    
    const tax = numberFormat(total*.15);

    if (total>0){
        
        if (total<20){
             shipping = numberFormat(total)*.15;
        }
        else if(total>50){
             shipping = numberFormat(total)*0;
        }
        else{
             shipping = numberFormat(total)*.12;
        }
    }
    const grandTotal = numberFormat(total+ shipping+tax);
    



    function numberFormat(data){
        const precission = data.toFixed(2);
        return Number(precission);
    }


    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <small><span style={{fontWeight:'bold'}}>Items Ordered :</span> {cart.length}</small>
            <br/>
            <small><span style={{fontWeight:'bold'}}>Shipping and Handling fee:</span> {shipping.toFixed(2)}</small>
            <br/>
            <small><span style={{fontWeight:'bold'}}>Only Item Total:</span> {total.toFixed(2)}</small>
            <br/>
            <small><span style={{fontWeight:'bold'}}>Estimated Tax:</span> {tax}</small>
            <br/>
            <small><span style={{fontWeight:'bold'}}>Order Total:</span> {grandTotal}</small>
            <br/>
            <br/>
            <br/>
            {
                props.children
            }
            
        </div>
    );
};

export default Cart;