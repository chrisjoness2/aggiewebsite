import './App.css';
import HowMany from './add';





function Card(props) {

    return <div>
    <ul>
    <img className= "testImg" src= {props.img} />
        <h1> {props.name}</h1>
        <h3> {props.cost}</h3>
        <button className="quickAddButton"> Quick Add </button>
    <HowMany />
    </ul>
    
    </div>
};



export default Card;