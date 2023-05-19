import React, { Component } from 'react'
import Columns from './Columns'

class Fragment extends Component {
  render() {
    return (
    <>
        <table>
            <tbody>
                <tr>
                   <Columns/> 
                </tr>
            </tbody>
        </table>
    </>
    )
  }
}

export default Fragment