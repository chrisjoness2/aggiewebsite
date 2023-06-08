import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Top1Add } from "../../products";
import { CartItem } from "./cart-item";
import './cart.css';




export const Cart = () => {
    const { cartItems } = useContext(ShopContext);

    return (
    <div className="cart"> 
        <div>
            <h1> Shopping Bag  </h1>
        </div>
        <div className="cartItems">
            {Top1Add.map((product) => {
                if (cartItems[product.id] !== 0) {
                    return <CartItem data={product}/>
                }
            })}

        </div>
        

    </div>
    )
};

