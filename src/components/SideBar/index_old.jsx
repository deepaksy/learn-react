import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'

const SideBar = React.forwardRef((props,ref)=>{
        window.addEventListener('scroll',()=>{
        if(window.scrollY >ref.current.offsetTop){
            ref.current.style.position="fixed"
            ref.current.style.top = '68px';
        }
    })
    return(
        <div ref={ref} className='sidebar'>
            <div className='contents'>
            <Link to={'/props'}> props</Link>
            </div>
        </div>
    )
})

// const SideBar = () => {
//     const sidebarRef = useRef()
    // function handleClick(){
    //     if(sidebarRef!=null){
    //         if(sidebarRef.current.classList.contains('show')){
    //             sidebarRef.current.classList.remove('show');
    //         }else{
    //             sidebarRef.current.classList.add('show');
    //         }
    //     }
    // }

//     window.addEventListener('scroll',()=>{
//         if(window.scrollY >sidebarRef.current.offsetTop){
//             sidebarRef.current.style.position="fixed"
//         }
//     })
//   return (
//     <div ref={sidebarRef} className='sidebar'>
//         <button  onClick={()=>handleClick()}>Click</button>
//     </div>
//   )
// }

export default SideBar