import React from 'react'
import Sidebar from './Sidebar'
import MainMenu from './MainMenu'
import '../styles/styles.css'

const Wrapper = () => {
  return (
    <div className='wrapper'>
        <Sidebar />
        <MainMenu />
    </div>
  )
}

export default Wrapper
