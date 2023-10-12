import React from 'react'
import './index.css'

const SideBar = React.forwardRef((props,ref)=>{
    return(
        <div ref={ref} className='sidebar'>

        </div>
    )
})

// const SideBar = () => {
//     const sidebarRef = useRef()
//     function handleClick(){
//         if(sidebarRef!=null){
//             if(sidebarRef.current.classList.contains('show')){
//                 sidebarRef.current.classList.remove('show');
//             }else{
//                 sidebarRef.current.classList.add('show');
//             }
//         }
//     }

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