import React from "react";

export default function Default(props)
{
    return(
        <div>
            <h1>DefaultProps</h1>
            <h1>Default Value is {props.name}</h1>
        </div>
    )
}

Default.default={
    name:"skct"
}