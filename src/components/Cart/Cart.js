import React from 'react';

const Cart = (props) => {

    const cart = props.cart;

    const total  = cart.reduce((total, prd)=> total+prd.price, 0);
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
        <div>
            <h3>Order Summary</h3>
            <p>Items Ordered : {cart.length}</p>
            <p>Shipping and Handling fee: {shipping}</p>
            <p>Total before tax and shipping-cost: {total.toFixed(2)}</p>
            <p>Estimated Tax: {tax}</p>
            <p>Order Total: {grandTotal}</p>
        </div>
    );
};

export default Cart;