import React from "react";
import ItemDescription from '../pages/Tops/toptemplate';
import '../pages/Tops/tops.css';
import top1 from "../images/top1.jpeg";
import top1Hover from "../images/top1hover.jpg"
import { PRODUCTS } from "../products";
import { Product } from "../pages/shop/product";
import { Name } from "../pages/Tops/toptemplate";
import { Top1Add } from "../products";

    




 


export const Top1 = () => {

    return (
    <div className="top1page">
        <div className="topDetails"> 
            <ItemDescription  
            name="Snug Fit Long Sleeve Sweater"
            price={49.99}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget arcu efficitur nisl sagittis tristique. "
            />
            {Top1Add.map((product) => (
            <Name data={product} />
        ))}
        </div>
        <div className="images">
        <img className="imgIndividual" src={top1} />
        <img className="imgIndividual" src={top1Hover}></img>

        <div>
        

        </div>




            
        </div>
        
       
        
    </div>
    );
}