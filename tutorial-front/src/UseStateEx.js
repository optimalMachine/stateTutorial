import React, { useState } from 'react';


function UseStateEx() {
    let [counter,setCounter] = useState(0);
    let [inputValue,setInputValue] = useState('enter something');
  
    const increment = () => setCounter(counter+1);
    let onChange = (e) =>{
      setInputValue(e.target.value);
    }
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={increment}>+</button>
        <br></br>
        <input placeholder='enter something' onChange={onChange} />
        <div></div>
        <h1>{inputValue}</h1>
    </div>
  )
}

export default UseStateEx;