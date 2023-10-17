import './style.css'
import react_logo from '../../assets/logo.svg'
import { useLayoutEffect, useMemo, useRef } from 'react'
import useTheme from '../../services/useTheme'
import ThemeButton from '../ThemeButton'
import SideBar from '../SideBar'
import Button from '../Button'

const Navbar = () => {
  const navRef = useRef(null)
  const navLinksRef = useRef(null)
  const {isDark,toggleTheme} = useTheme()

  const setScreen = ()=>{
    if(navLinksRef.current!=null){
      if(window.innerWidth>600){
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


  const {render,toggleSidebar} = SideBar()

  return (
      <>
    <nav ref={navRef} className={`navbar-container`}>
        <div  className='navbar'>
          <Button onclick={()=>toggleSidebar()} text={`click`} />
            <img id='react-logo' alt='react-logo' src={react_logo} width={70}/>
            {/**/}
            <div className='navbar-right'>
              <div>
          searchbar
        </div>
        <div ref={navLinksRef}>
          links
        </div>
        <div>
        <ThemeButton onclick={toggleTheme} text={isDark?'light':'dark'}/>
        </div>
            </div>
        </div>
    </nav>
    {render}
    </>
  )
}

export default Navbar