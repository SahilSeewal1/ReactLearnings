import React from 'react'

function ChildComponent(props1) {
  return (
    <div>
        <button onClick={props1.greetHandler}>Connect with parent component!</button>
    </div>
  )
}

function ChildComponent1(props) {
    return (
      <div>
          <button onClick={() => props.greetHandler1('Alien')}>Connect with parent component!</button>
      </div>
    )
  }
export {ChildComponent, ChildComponent1}