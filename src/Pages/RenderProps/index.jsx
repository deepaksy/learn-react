import ClickCounter from './ClickCounter'
import WithCounter from './WithCounter'
import './index.css'

const Renderprops = () => {
  return (
    <div>
        <h1>Render props</h1>
        <p>The term <q>render props</q> refers to a technique for sharing code between React component using props whose value is a function.</p>
        <WithCounter render={(count,incrementCount)=><ClickCounter count={count} incrementCount={incrementCount}/>} />
    </div>
  )
}

export default Renderprops