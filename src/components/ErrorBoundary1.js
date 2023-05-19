import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary'
import Hero from './Hero'

class ErrorBoundary1 extends Component {
  
  render() {
    return (
      <div>
       <ErrorBoundary>
        <Hero heroName='Batman'/>
        </ErrorBoundary>

        <ErrorBoundary>
        <Hero heroName='Spiderman'/>
        </ErrorBoundary>
        
        <ErrorBoundary>
        <Hero heroName='J'/>
        </ErrorBoundary> 
      </div>
    )
  }
}

export default ErrorBoundary1