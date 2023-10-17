/**
 * Sidebar concept 
 */

import './sidebar.css'
import {useEffect, useRef, useState} from 'react'

const useSidebar = () =>{
    const [isOpen,setIsOpen] = useState(false)
    const sidebarRef = useRef()
    function toggleSidebar(){ 
        setIsOpen(!isOpen) //sidenav toggler button function
    }

    useEffect(()=>{
        const scrollLock = () =>{
            if(window.scrollY > sidebarRef.current.offsetTop){
                console.log('Sidebar is fixed now')
                sidebarRef.current.style.position = 'fixed'
                sidebarRef.current.style.top = '68px'
            }
        }
            if(isOpen){
                window.addEventListener('scroll',scrollLock)
            }
            return ()=>{
                window.removeEventListener('scroll',scrollLock)
            }
        
    },[isOpen])

    /* handle Closing of sidebar on out of focus */
    useEffect(()=>{
        const closeSidebar = (e) =>{
            if(isOpen && e.target.closest('.show')===null){
                setIsOpen(false)
            }
        }

        if(isOpen){
            setTimeout(() => {
                window.addEventListener('click',closeSidebar)
            }, 2);
        }
        return ()=>{
            window.removeEventListener('click',closeSidebar)
        }
    },[isOpen])

    // Handles the physical closing and opening of sidebar
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
    
    return{isOpen,toggleSidebar,sidebarRef}
}

export default useSidebar