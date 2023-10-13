import React from 'react'

const GreetHero = ({heroname}) => {
    if(heroname==='joker'|'Joker'){
        throw new Error('Joker is not a hero!')
    }
  return (
    <div>Welcome {heroname}</div>
  )
}

export default GreetHero