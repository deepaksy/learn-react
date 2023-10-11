import useTheme from '../../services/useTheme'
import './style.css'

const Button = ({text}) => {
  const {isDark,toggleTheme} = useTheme()
  console.log(isDark)
  return (
    <button onClick={()=>toggleTheme()}>
      {isDark?'dark':'light'}
    </button>
  )
}

export default Button