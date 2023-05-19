import React from 'react'

// Memo Component - applied only on functional components

function MemoComp({name}) {
    console.log('Memo Component')
    return (
    <div>
        {name}
    </div>
  )
}

export default React.memo(MemoComp)
