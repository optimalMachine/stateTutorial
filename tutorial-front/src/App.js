import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  let [counter,setCounter] = useState(0);
  let [inputValue,setInputValue] = useState('hello world');

  const increment = () => setCounter(counter+1);
  let onChange = (e) =>{
    setInputValue(e.target.value);
  }
  return (
    <div className="App">
      <div>
        <h1>{counter}</h1>
        <button onClick={increment}>+</button>
      </div>
      <br></br>
      <div>
        <input placeholder='enter something' onChange={onChange} />
        <div></div>
        <h1>{inputValue}</h1>

      </div>

    </div>
  );
}

export default App;
