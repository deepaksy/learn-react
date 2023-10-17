import React, { useEffect, useRef, useState } from 'react'
import './index.css'
import {Link} from 'react-router-dom'

const SideBar = ()=>{
    const [isOpen,setIsOpen] = useState(false)
    const sidebarRef = useRef()
    const toggleSidebar = () =>{
        setIsOpen(!isOpen)
    }   
    useEffect(()=>{
        const handleScrollLock = () =>{
            if(window.scrollY >sidebarRef.current.offsetTop){
                console.log('sidebar fixed')
                sidebarRef.current.style.position="fixed"
                sidebarRef.current.style.top = '68px';
            }
        }
        if(isOpen){
            window.addEventListener('scroll',handleScrollLock)
        }

        return ()=>{
            window.removeEventListener('scroll',handleScrollLock)
        }
    },[sidebarRef,isOpen])

    // closeSidebar
    useEffect(()=>{
        const closeSidebar = (e) =>{
                if(isOpen && e.target.closest('.show')===null){
                setIsOpen(false)
            }
        }
        if(isOpen){
            setTimeout(() => {
                window.addEventListener('click',closeSidebar)
            }, 10); // timeout to just not to immediately run this function after isOpen is true.
        }
        return ()=>{
            window.removeEventListener('click',closeSidebar)
        }
    },)

    // Adds class list show if sidebar is open
    useEffect(()=>{
        if(sidebarRef!==null){
            if(isOpen){
                sidebarRef.current.classList.add('show')
            }
            else{
                sidebarRef.current.classList.remove('show')
            }
        }
    },[isOpen])

    return {
        render:(
            <div ref={sidebarRef} className='sidebar'>
            <div className='contents'>
            <Link to={'/props'}> props</Link>
            </div>
        </div>
        ),
        isOpen,
        toggleSidebar
    }

}

export default SideBar