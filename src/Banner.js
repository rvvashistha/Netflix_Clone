import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <header className="banner" style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://thelesfilms.files.wordpress.com/2016/06/netflix-banner.jpg")`,
        backgroundPosition:"center center"
    }}>
        
    <div className="banner_contents">
        <h1 className='banner_title'>Movie Name</h1>
        <div className='banner_buttons'>
            <button className='banner_button'>Play</button>
            <button className='banner_button'>My List</button>

        </div>
    </div>
    </header>
  )
}
 
export default Banner