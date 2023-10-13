import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseURL } from '../urlResolver'

const Get = () => {
    const [list,setList] = useState([
        {completed:false,id:1,title:'',userId:0}
    ])

    useEffect(()=>{
        console.log(`useeffectttt`)
        axios.get(baseURL+'todos')
        .then(res=>{
            console.log(res)
            setList(res.data)
        })
        .catch(e=>console.log(`Error: ${e}`))
    },[])

  return (
    <div>
    <h1>Lists of TOdos</h1>
    <ul>
    {list.map((item,i)=>{
        const {completed,id,title,userId} = item
        return (
            <div key={i}>
            <h2 key={title}>{title}</h2>
            <h2 key={i}>userid: {userId}</h2>
            <p key={id}>{completed?'Completed':'pending'}</p>
            </div>
        )
    })}
    </ul>
    </div>
  )
}

export default Get