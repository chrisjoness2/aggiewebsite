import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import './tops.css'





export const Name = (props) => {
    const {id} = props.data;
    const { addToCart } = useContext(ShopContext);

    return (
    <div>
    
        <button className="addToCartBttn" onClick={() => addToCart(id)}> Add To Cart </button>

        
    </div>
    );
};


export const ItemDescription = (props) => {
    return (
    <div>
        <div className="itemName">
            <h2> {props.name} </h2>
        </div>

        <div className="itemPrice">
            <h3> ${props.price} </h3>
        </div>

        <div className="itemDescription">
            <p> {props.description} </p>
        </div>
        
        <div>
        
        <h3> Select Size </h3>
        </div>
        

    </div>
    )

};

export default ItemDescription;
