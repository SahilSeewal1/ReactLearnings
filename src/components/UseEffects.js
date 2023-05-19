import React, { useEffect } from 'react'



const UseEffects = () => {
  useEffect(()=> {
    console.log('Use effect invoked!')
  }, [])

  const clickHandler = () => {
    console.log('Button is clicked!')
}
    return (
    <div>
     <button onClick={clickHandler}>I am use effect!! </button></div>

  )
}

export default UseEffects
