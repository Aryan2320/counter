import React from "react";
import { useState } from "react";
const Xcount = ()=>{
    const [count,setCount]=useState(0);
    let incFun =()=>{
        setCount((prevCount)=>
            prevCount+1)
    }
    let decFun =()=>{
        setCount((prevCount)=>
            prevCount-1)
    }
    return (
       <div>
        <center><h1>Counter</h1>
        <p>Count:{count}</p>
        <button onClick={incFun}>Increment</button><button onClick={decFun}>Decrement</button></center>
       </div> 
    )
}
export default Xcount