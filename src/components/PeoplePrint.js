import React from 'react'

function PeoplePrint({peopleHandler}) {
  return (
    <div>
        <h1>name : {peopleHandler.name} age : {peopleHandler.age}</h1>
        </div>
  )
}

export default PeoplePrint