import { useState } from "react";

function HowMany() {
const [count, setCount] = useState(0);


    const increase = () => {
        setCount(count + 1);
    };
    const decrease = () => {
        setCount(count - 1);
    };


 
    return (
        <div>
    <button onClick={increase}> + </button>
    <button onClick={decrease}> - </button>

    {count}
        </div>
    );
}

export default HowMany;
