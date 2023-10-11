import { useLayoutEffect, useMemo, useState } from 'react'

const useTheme = () => {
    const [isDark,setIsDark] = useState(false)
    useLayoutEffect(()=>{
        if(isDark){
            document.documentElement.setAttribute('theme','dark')
        }
        else{
            document.documentElement.setAttribute('theme','light')
        }
    },[isDark])

    useMemo(()=>{
        
    },[])
    const toggleTheme = () =>{
        setIsDark(!isDark)
    }
  return {
    isDark,
    toggleTheme
  }
}

export default useTheme