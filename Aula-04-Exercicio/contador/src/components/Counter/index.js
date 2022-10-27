import { useState } from "react";

function Counter (){
    const [counter, setCounter] = useState(0);

    function sum() {
        setCounter(counter+1);
    }
    function sub(){
        setCounter(counter-1);
    }

    return(
        <div>
            <h1 className="Counter">{counter}</h1>
            <button className="Button" onClick={sum}>+</button>
            <button className="Button" onClick={sub}>-</button>
        </div>
    );
}


export default  Counter;