import React from 'react'
import './Appdownload.css'
import { assets } from '../../assets/assets'

const Appdownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>Fore better experience dont download it is not available in</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" /><img src={assets.app_store} alt="" />
        </div>
      
    </div>
  )
}

export default Appdownload
