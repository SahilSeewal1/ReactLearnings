import React from "react"

const PropsFunction = (props) => {
    return ( <div>
        <h1>Hello!! '{props.name}' short for '{props.shortName}'</h1>
        {props.children}
        </div>)
    
     }
    export default PropsFunction
    
    