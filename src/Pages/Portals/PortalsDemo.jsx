import ReactDOM from 'react-dom'

const PortalsDemo = () => {
  return ReactDOM.createPortal(
    <h1>This is in another root</h1>
    ,document.getElementById('portal')
  )
}

export default PortalsDemo