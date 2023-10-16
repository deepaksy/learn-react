import {useReducer} from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter:0
}

const reducer = (state,action) =>{
    switch(action.type){
        case 'increment':
            return {...state,firstCounter:state.firstCounter+action.value}
        case 'decrement':
            return {...state,firstCounter:state.firstCounter-action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}

const ReducerCounter1 = () => {
    const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
    <h1>Count - {count.firstCounter}</h1>
    <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
    <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
    <button onClick={()=>dispatch({type:'increment',value:5})}>Increment by 5</button>
    <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrement by 5</button>
    </div>
  )
}

export default ReducerCounter1