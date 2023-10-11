import './style.css'
import react_logo from '../../assets/logo.svg'
import { useLayoutEffect, useMemo, useRef } from 'react'
import Button from '../Button'
import useTheme from '../../services/useTheme'

const Navbar = () => {
  const navRef = useRef(null)
  const navLinksRef = useRef(null)
  const {isDark,toggleTheme} = useTheme()

  const setScreen = ()=>{
    if(navLinksRef.current!=null){
      if(window.innerWidth>600){
        console.log(window.innerWidth)
        navLinksRef.current.classList.remove('hide')
      }
      else{
        navLinksRef.current.classList.add('hide')
      }
    }
  }
  
  useLayoutEffect(setScreen,[])
   useMemo(()=>{
  window.addEventListener('resize',setScreen)
  },[])
  

  useMemo(()=>{
    window.addEventListener('scroll',()=>{
      if(navRef.current!=null){
        if(navRef.current.offsetTop>2){
          navRef.current.classList.add('sticky')
          
          
        }
        else{
          navRef.current.classList.remove('sticky')
          
        }
      }
    })
  },[navRef])

  // window.addEventListener('scroll',()=>{
  //   if(navRef.current!=null){
  //     if(window.scrollY>navRef.current.offsetTop){
  //       navRef.current.classList.add('sticky')
  //       navRef2.current.classList.add('sticky')
        
  //     }
  //     else{
  //       navRef.current.classList.remove('sticky')
  //       navRef2.current.classList.remove('sticky')
  //     }
  //   }
  // })

  // setInterval(() => {
  //   console.log(window.scrollY)
  //   console.log("Nav: "+navRef.current.offsetTop)
  // }, 100);

  return (
    <nav ref={navRef} className={`navbar-container`}>
        <div  className='navbar'>
            <img id='react-logo' alt='react-logo' src={react_logo} width={70}/>
            {/**/}
            <div>
          searchbar
        </div>
        <div ref={navLinksRef}>
          links
        </div>
        <div>
        <Button onclick={toggleTheme} text={isDark?'light':'dark'}/>
        </div>
        </div>
    </nav>
  )
}

export default Navbar