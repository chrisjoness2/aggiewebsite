import React from "react";
import ItemDescription from '../pages/Tops/toptemplate';
import '../pages/Tops/tops.css';
import top1 from "../images/top1.jpeg";
import top1Hover from "../images/top1hover.jpg"
import { PRODUCTS } from "../products";
import { Product } from "../pages/shop/product";
import { Name } from "../pages/shop/product";
import { Top1Example } from "../products";

    




 


export const Top1 = () => {

    return (
    <div className="top1page">
        <div className="topDetails"> 
            <ItemDescription  
            name="Snug Fit Long Sleeve Sweater"
            price={49.99}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget arcu efficitur nisl sagittis tristique. "

            />
        </div>
        <div className="images">
        <img className="imgIndividual" src={top1} />
        <img className="imgIndividual" src={top1Hover}></img>

        <div>
        {Top1Example.map((product) => (
            <Name data={product} />
        ))}

        </div>




            
        </div>
        
       
        
    </div>
    );
}