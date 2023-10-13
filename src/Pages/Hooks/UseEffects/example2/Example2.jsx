import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {baseURL} from '../../../Http/urlResolver'

const Example2 = () => {
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    useEffect(()=>{
        axios.get(baseURL+`posts/${id}`)
        .then(res=>{
            setPost(res.data)
        })
        .catch(()=>{
            console.log('Error')
            setPost({
                title:`No data wrt: ${id}`
            })
        })
    },[id])
  return (
    <div>
        <input type='number' onChange={(e)=>setId(e.target.value)} value={id}/>
        <div>
            title: {post.title}
        </div>
    </div>
  )
}

export default Example2