import top1 from "./images/top1.jpeg";
import top2 from "./images/top2.jpeg";
import top3 from "./images/top3.jpeg";
import top4 from "./images/top4.jpeg";
import top5 from "./images/top5.jpeg";
import top6 from "./images/top6.jpeg";
import top7 from "./images/top7.jpeg";
import top8 from "./images/top8.jpeg";
import { Link } from 'react-router-dom';







export const PRODUCTS = [
    {
        id: 1,
        productName: <Link to="/top1"> Blue Top </Link>,
        productImage: top1, 
        price: "22",
        tops: '/top1'
    },
    {
        id: 2,
        productName: <Link to="/top2"> Orange Top </Link>,
        productImage: top2,
        price: "22",
        tops: "/top2"


    },
    {
        id: 3,
        productName: <Link to="/top3"> Blue Top </Link>,
        productImage: top3,
        price: "22",
        tops: "/top3"
    },
    {
        id: 4,
        productName: <Link to="/top4"> Blue Top </Link>,
        productImage: top4,
        price: "22",
        tops: "/top4"
    },
    {
        id: 5,
        productName: <Link to="/top5"> Blue Top </Link>,
        productImage: top5,
        price: "22",
        tops: "/top5"
    },
    {
        id: 6,
        productName: <Link to="/top6"> Blue Top </Link>,
        productImage: top6,
        price: "22",
        tops: "/top6"
    },
    {
        id: 7,
        productName: <Link to="/top7"> Blue Top </Link>,
        productImage: top7,
        price: "22",
        tops: "/top7"
    },
    {
        id: 8,
        productName: <Link to="/top8"> Blue Top </Link>,
        productImage: top8,
        price: "22",
        tops: "/top8"
    },
   
]


export const Top1Example = [
    {
        id: 1,
        productName: <Link to="/top1"> Blue Top </Link>,
        productImage: top8,
        price: "40"
    },
    {
        id: 2,
        productName: <Link to="/top1"> Blue Top </Link>,
        productImage: top8,
        price: "50"
    },
    {
        id: 3,
        productName: <Link to="/top1"> Blue Top </Link>,
        productImage: top8,
        price: "50"
    },
]
