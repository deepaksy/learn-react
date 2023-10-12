import { useLayoutEffect,  useState } from 'react'

const useTheme = () => {
    const [isDark,setIsDark] = useState(false)
    
    useLayoutEffect(()=>{
        console.log(`Initial update functions uselayouteffect called.`);
        if(localStorage.getItem('theme')===null){
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setIsDark(true)
                storeThemePreference('dark')
            }
            else{
                setIsDark(false)
                storeThemePreference('light')
            }
            console.log(`theme undefined`);
        }
        else{
            setIsDark(localStorage.getItem('theme')==='dark'?true:false)
        }
    },[])

    useLayoutEffect(()=>{
        const getThemeValue = isDark?'dark':'light'
        if(isDark){
            document.documentElement.setAttribute('theme',getThemeValue)
        }
        else{
            document.documentElement.removeAttribute('theme')
        }
        storeThemePreference(getThemeValue)
    },[isDark])

    

    const storeThemePreference = (isdark) =>{
        localStorage.setItem('theme',isdark)
    }

    const toggleTheme = () =>{
        setIsDark(!isDark)
    }
  return {
    isDark,
    toggleTheme
  }
}

export default useTheme