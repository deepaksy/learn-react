import useTheme from '../../services/useTheme'
import './style.css'

const Button = ({text,onclick}) => {
  return (
    <button onClick={()=>onclick()}>
      {text}
    </button>
  )
}

export default Button