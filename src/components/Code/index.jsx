import React from 'react'

const style = {
    pre:{
        width:'80%',
        height:'fit-content',
        padding:'1rem',
        margin:'1rem',
        overflowX:'scroll',
        border:'1px solid var(--textColor)'
    }
}

const Code = ({content}) => {
  return (
    <pre style={style.pre}>
    <code>{content}</code>
    </pre>
  )
}

export default Code