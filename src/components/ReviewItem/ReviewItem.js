import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    console.log(props);
    const { name, quantity, price } = props.product;
    // const removeItem = props.removeItem;
    // console.log(props.product);
    const pricetotal = quantity * price;
    return (
        <div className='review-item'>
            {/* <h6>This is Review Item.</h6> */}
            <div style={{ height: '150px' }}>
                <h4 className='product-name'>Name: {name}</h4>
                <p>quantity: {quantity}</p>
                {/* <br />
                <small>unitPrice: {price}</small> */}
                <br />
                <small>$ {pricetotal}</small>

            </div>
            <div style={{ textAlign: 'right' }}>
                <button
                    className='main-button'
                    onClick={() => props.removeItem(props.product.key)}
                >Remove from Cart</button>
            </div>
        </div>
    );
};

export default ReviewItem;