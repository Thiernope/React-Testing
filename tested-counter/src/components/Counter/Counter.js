import React, {useState} from 'react';

const Counter = () => {
    const [counterValue, setCounterValue] = useState(0);
    const [inputValue, setInputValue] = useState(1)

    const incrimentCounter = () => {
        console.log("clicked")
        setCounterValue(counterValue + inputValue)
    }


    const decrementCouter = () => {
        setCounterValue(counterValue - inputValue);
    }
  return (
    <div>
        <h1 data-testid="header">My Counter</h1>
        <h1 
        className={`${counterValue >= 100? "green":""}${counterValue <= -100? "red":""}`}
        data-testid="counter">
            {counterValue}  
         </h1>
        <button  
        onClick={decrementCouter} 
        data-testid="subtr-btn">-</button>
        <input 
        className="textCenter"
        type="number" 
        data-testid="input"
        value={inputValue}
        onChange ={(e)=>{setInputValue(parseInt(e.target.value))}} 
        />
        <button onClick={incrimentCounter} data-testid="add-btn">+</button>
    </div>
  );
}

export default Counter;
