import { useEffect } from 'react'
import './index.css'
import {reducer,array1} from './reducer'
import ReducerCounter1 from './example/ReducerCounter1'

const UseReducers = () => {
    useEffect(()=>{
        console.log(array1.reduce(reducer,1))
    },[])
  return (
    <div>
    <h1>useReducer in React</h1>
    <h2>What is useReducer?</h2>
    <p>
    useReducer is a hook in react that is used for state management.
    </p>
    <ul>
    <li>It is an alternative to useState</li>
    <li>What's the difference</li>
    <li>useState is build using useReducer</li>
    <li>When to useReducer vs useState?</li>
    </ul>
    <div>
    <h1>Example:</h1>
    <ReducerCounter1/>
    </div>
    </div>
  )
}

export default UseReducers