import './index.css'
import FunctionalComponent from '../../codes/Components/FunctionalComponents'
import ClassComponent from '../../codes/Components/ClassComponent'

const Components = () => {
  return (
    <div>
    <section id='funtional-component'>
    <FunctionalComponent />
    </section>
    <h1>Class Component</h1>
    <ClassComponent/>
    </div>
  )
}

export default Components