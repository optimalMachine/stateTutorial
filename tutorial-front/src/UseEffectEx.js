import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UseEffectEx() {
    const [data,setData]= useState('');
    const [count,setCount] = useState(0);

    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
            setData(response.data[0].email)})
            console.log("API was called")
    },[count])

    const increment = () => setCount(count+1);

    return (
        <div>
            {data}
            <br></br>
            {count}
            <br></br>
            <button onClick={increment}>Click</button>
        </div>
    )
}

export default UseEffectEx