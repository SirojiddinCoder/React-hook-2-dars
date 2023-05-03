import React,{useEffect, useState} from "react";
const ReactHook = ({count})=>{
    const [ counter,setCounter] = useState(count)
    const [status,setStatus] = useState("Student");
    useEffect(()=>{
   setCounter(count)
   console.log('hook click')
   setCounter(status)
   console.log('hoooook')

    },[count,status]);
    return(
        <div>
            <h2>React Hook da state yaratilishi</h2>
            <br /><br />
            <h1>React hook state :{counter} </h1>
            <button onClick={()=>setCounter(counter + 1)}>+</button>
            <button onClick={()=>setCounter(counter - 1)}>-</button>
            <br /><br />
            <input
            onChange={(e)=>setStatus(e.target.value)}
            value={status}
            type="text" />
        </div>
    )

}

export default ReactHook;