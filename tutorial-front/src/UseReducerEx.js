import React, { useState, useReducer } from 'react';

function UseReducerEx() {
    let [count,setCount] = useState(0);
    let [showText,setShowText] = useState(true);
    const reducer = (state,action)=>{
        switch(action.type){
        case "INCREMENT":
            return {count:state.count+1, showText:state.showText}
        case "toggleShowText":
            return {count:state.count, showText:!state.showText}
        }
    }
    const [state,dispatch] = useReducer(reducer,{count:0,showText:'This is a text'});

    const onUseReducerExample = () => {
        setCount(count+1);
        setShowText(!showText);
    }
    return (
    <div>
        <h1>{count}</h1>
        <button onClick={onUseReducerExample} >Click here</button>
        {showText ? <p>This is a text</p> : null}
    </div>
  )
}

export default UseReducerEx;