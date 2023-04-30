import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Link } from 'react-router-dom';
import top1 from "../../images/top1.jpeg";


 


export const Name = (props) => {
    const {id, productName, price, productImage, tops} = props.data;
    const { addToCart } = useContext(ShopContext);

    return (
    <div>
    
    
        {price}
        <button onClick={() => addToCart(id)}> Trial Button </button>

        
    </div>
    );
};





export const Product = (props) => {
    const {id, productName, price, productImage, tops} = props.data;
    return (
    <div>
        <div className="product">
          <Link to={tops}> <img className="allTops" src={productImage}></img>  </Link>
            
        </div> 
        <div className="description">
                <h3 className="topName"> {productName} </h3>
                <h3 className="miniPrice"> ${price}</h3>

            
                
                

        </div>
    </div>



    );
};