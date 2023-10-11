import './style.css'
import logo from '../../assets/logo.svg'

const Introduction = () => {
  return (
    <div className='center-div'>
        <div className='content'>
            <img alt='react' src={logo} width={200}/>
            <h1>React</h1>
            <p>React is a javascript library for building user-interfaces.</p>
        </div>
    </div>
  )
}

export default Introduction