import React from 'react'
import Logoclima from './img/Logoclima.png'

const Loading = () => {
  return (
    
    <div className='sala'>
        <header className='App-header'>
        <img src={Logoclima} className='App-logo' alt="logo"/>
        <h2 className='loading'>Loading...</h2>
        <h2 className='loading'>PLEACE, ACTIVATE THE LOCATION</h2>
        </header>
    </div>
  )
}

export default Loading