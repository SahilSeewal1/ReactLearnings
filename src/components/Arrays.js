import React from 'react'
import PeoplePrint from './PeoplePrint'

function Arrays() {

    const peopleList = [{
        name: 'abc',
        age: 26
    },
    {
        name: 'xyz',
        age: 30
    }]

    const countList = [10, 20, 30, 40, 50]

    const peopleArrayList = peopleList.map(people => <PeoplePrint key = {people.name} peopleHandler = {people} />)

    const count1 =  countList.map(count=> <span key = {count}>{count} </span>) 

    return (
    <div>
        {peopleArrayList}
        {count1}
    </div>
  )
}

export default Arrays