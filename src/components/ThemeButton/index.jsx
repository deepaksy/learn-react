import './style.css'

const ThemeButton = ({onclick,text}) => {
  return (
    <button id='theme-button' className='theme-button' onClick={onclick}>{text}</button>
  )
}
export default ThemeButton