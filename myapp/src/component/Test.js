import { useState } from "react";

export default function Test()
{
    const [count,setCount]=useState(0);
    const changeCount=()=>setCount(count+1);
    const derCount=()=>setCount(count-1);
    const changeCount1=()=>setCount(count+1);
    const derCount1=()=>setCount(count-1);
    

    return(
        <div>
            <p>
                Add to cart:{count}
               <br></br>
                <button onClick={changeCount}>+</button>
                <button onClick={derCount}>-</button>
                <br></br>
                Price:{count*100}
            </p>
<p>
                Add to cart:{count}
               <br></br>
                <button onClick={changeCount1}>+</button>
                <button onClick={derCount1}>-</button>
                <br></br>
                Price:{count*200}
</p>
<p>
                Add to cart:{count}
               <br></br>
                <button onClick={changeCount}>+</button>
                <button onClick={derCount}>-</button>
                <br></br>
                Price:{count*300}
                </p>
        </div>
    )
}