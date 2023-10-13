import React from 'react'
import GreetHero from './GreetHero'
import ErrorBoundaryComponent from './ErrorBoundaryComponent'

const ErrorBoundary = () => {
  return (
    <div>
      <h1>ErrorBoundary</h1>
      <GreetHero heroname="Batman"/>
      <GreetHero heroname="Superman"/>
      <ErrorBoundaryComponent>
      <GreetHero heroname="joker"/>
      </ErrorBoundaryComponent>
    </div>
  )
}

export default ErrorBoundary