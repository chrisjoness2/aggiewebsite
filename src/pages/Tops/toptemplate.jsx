import React from "react";
import './tops.css'


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
            <button className="addToCartBttn"> Addddddd To Cart </button>
        </div>
        

    </div>
    )

};

export default ItemDescription;
