import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import useSidebar from '../../services/useSidebar/useSidebar'

const SideBar = ()=>{
    const {isOpen,toggleSidebar,sidebarRef} = useSidebar()

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