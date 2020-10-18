import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData'
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';


const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts]= useState(first10);
    const [cart, setCart] = useState([]);

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
    }, [])
    const handleAddProduct = (product) =>{
        // console.log("Product added", product);
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd=> pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd=> pd.key!== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else{
            product.quantity =1;
            newCart =[...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
        // console.log(cart);
    }
    return (
        <div className ='shop-container'>

            
            <div className="product-container">

               
                {
                    products.map(pd=> 
                    <Product 
                        handleAddProduct = {handleAddProduct}
                        key = {pd.key}
                        product ={pd}
                        showAddButton ={true}
                              
                    ></Product>)
                }
                
            </div>
            
            <div className="cart-container">
                    {/* <h5>this is cart area</h5>
                    <p>Order summary : {cart.length}</p> */}
                    <Cart cart= {cart}>
                    <Link to='/review'><button className='main-button'>Review</button></Link>
                    </Cart>

            </div>
            
           
        </div>
    );
};

export default Shop;