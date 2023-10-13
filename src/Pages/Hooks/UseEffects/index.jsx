import React,{ useEffect, useState } from 'react'
import CountParent from './CountParent'
import './index.css'
import ChatRoom from './example/ChatRoom'
import Example2 from './example2/Example2'

const UseEffects = () => {
    const [chatId,setChatId] = useState(0)
    const [isSubmit,setIsSubmit] = useState(false)
    useEffect(()=>{
        console.log(`ChatId has been changed`);
    },[chatId])

    useEffect(()=>{
        console.log(`Is Submit has been changed`);
    },[isSubmit])

    console.log('UseEffect Parent rendered');
  return (
    <div>
        <h1>Use Effect</h1>
        <CountParent/>
        <h2>Example 2</h2>
        <input id='input' type='number' name='chatid' value={chatId} onChange={(e)=>setChatId(e.target.value)}/>
        <input type='button' value={'submit'} onClick={()=>{setIsSubmit(true);}}/>
        {
            isSubmit?<ChatRoom roomId={chatId}/>:null
        }
        <h2>Example 3</h2>
        <Example2/>
    </div>
  )
}

export default UseEffects