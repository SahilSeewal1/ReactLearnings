import React from 'react'

const FRChildRef = React.forwardRef((props, ref) => {

  return (
    <div>
        <input type='text' ref={ref}/>
    </div>
  )
})

export default FRChildRef
