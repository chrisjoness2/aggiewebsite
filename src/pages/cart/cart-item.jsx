import React, { useContext} from "react";
import { ShopContext } from "../../context/shop-context";


export const CartItem = (props) => {
    const {id, productName, price, productImage, tops} = props.data;
    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);


    return (
        <div>
            <div className="cartItem">
                <img className="cartImg" src={productImage} />

                <div className="cartDescription">

                <p className="cartProductName"> Product: {productName} </p>
                <p className="cartPrice"> Price: ${price} </p>

                <div className="cartHandler">
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input className="inputValue" value={cartItems[id]}/>
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
                

                </div>
            </div>

            
        


            
        </div>
    )
}