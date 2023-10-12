import React from 'react'

const WithoutJSX = () => {
  return React.createElement('div',{style:{backgroundColor:'green'}},React.createElement('h1',null,'Hello world'))
}

export default WithoutJSX