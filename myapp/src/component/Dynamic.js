import React, { useState } from "react";
export default function Dynamic()
{
    const[x,setx]=useState(12)
    return(
        <div>
            {x>10 ?(<p>value Greater than 10</p>):
            (<p>The value is less than 10</p>)}
        </div>
    )
}