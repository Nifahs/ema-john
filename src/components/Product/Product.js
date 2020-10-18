import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Product = (props) => {

    // console.log(props);
    const { name, img, seller, price, stock, key } = props.product;
    return (

        <div className="product">

            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'><Link to={'/product/' + key}>{name}</Link></h4>
                <p>by: {seller}</p>
                <p>${price}</p>
                <p>Only {stock} left in stock. Buy before stock runs out.</p>
                {props.showAddButton &&<button
                    className='main-button'
                    onClick={() => props.handleAddProduct(props.product)}
                >
                    <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>}

            </div>
        </div>

    );
};

export default Product;