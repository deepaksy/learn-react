import React from 'react'
import JSXContent from './JSX'
import Code from '../../components/Code'
import WithoutJSX from './WithoutJSX'

const withoutjsx = `import React from 'react'

const WithoutJSX = () => {
  return React.createElement('div',{style:{backgroundColor:'green'}},React.createElement('h1',null,'Hello world'))
}

export default WithoutJSX`

const JSX = () => {
  return (
    <div>
    <h1>JSX</h1>
    <p>Instead of jumping straight into jsx, Let us discuss and learn how we write a react component without jsx.</p>
    <ul>
    <li>JavaScript XML (JSX) - Extension to the JavaScript language syntax.</li> 
    <li>Write XML-like code for elements and components.</li> 
    <li>JSX tags have a tag name, attributes, and children</li> 
    <li>JSX is not a necessity to write React application</li>
    <li>JSX makes your react code simpler and elegant</li> 
    <li>JSX ultimately transpiles to native javascript code to create views.</li> 
    </ul>
    <section>
    <h2>Without JSX</h2>
    <p>Below is the example for a element witout jsx.</p>
    <Code content={withoutjsx} />
    <WithoutJSX/>
    </section>
    <JSXContent/>
    </div>
  )
}

export default JSX