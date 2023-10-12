import './style.css'

const Button = ({text,onclick}) => {
  return (
    <button id='button' className='button' onClick={()=>onclick()}>
      {text}
    </button>
  )
}

export default Button