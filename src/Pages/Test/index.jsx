import { useEffect } from 'react'
import './index.css'
import { useState } from 'react'
import { useRef } from 'react'

const Test = () => {
    const [isOpen,setIsOpen] = useState(false)
    const elRef = useRef()
    const toggleWidth = () =>{
        setIsOpen(!isOpen)
    }
    useEffect(()=>{
        const closeSidebar = (e) =>{
            // console.log(e.target.closest('.el')===null)
            if(isOpen && (e.target.closest('.el')===null || e.target.closest('.el.open')===null)){
                setIsOpen(false)
            }
        }
        window.addEventListener('click',closeSidebar)
        return ()=>{
            window.removeEventListener('click',closeSidebar)
        }
    },[isOpen])
    useEffect(()=>{
        if(elRef!=null){
            if(isOpen){
                elRef.current.classList.add('open')
            }
            else{
                elRef.current.classList.remove('open')
            }
        }
    },[isOpen])
  return (
    <div>
    <div ref={elRef} className='el'>
    <h1>Element one</h1>
    <button onClick={()=>toggleWidth()}>togglewidth</button>
    </div>
    </div>
  )
}

export default Test