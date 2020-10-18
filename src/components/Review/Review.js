import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css'
import happyimage from '../../images/cutecat.gif'


const Review = () => {

    const [cart, setCart] = useState([])
    const [orderPlaced, setOrderPlaced] = useState();

    const removeItem = (productKey) => {
        console.log('Item removed', productKey);
        removeFromDatabaseCart(productKey)
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart)
    }

    const handlePlaceOrder=()=>{
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const counts = productKeys.map(key => savedCart[key]);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        // console.log(savedCart);
        // console.log(cartProducts);
        setCart(cartProducts);
    }, []);

    let thankyou;
    if(orderPlaced){
        thankyou = <img src={happyimage} alt=""></img>
    }
    return (
        
        <div className='reviewPage'>
            {/* <h1>This is Review page</h1> */}
            <div className='ReviewItem'>
                <p>Total items: {cart.length}</p>
                {
                    cart.map(pd => <ReviewItem
                        product={pd}
                        key={pd.key}
                        removeItem={removeItem}
                    ></ReviewItem>)
                }
                {thankyou}
            </div>
            <div className="ReviewCart">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="main-button">Order Item</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;