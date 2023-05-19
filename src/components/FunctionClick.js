import React from 'react'

function FunctionClick() {
    function clickButton() {
        console.log("Function button clicked!")
    }

  return (
    <div>
        <button onClick={clickButton}>Click</button>
    </div>
  )
}

export default FunctionClick