import React from 'react'
import '../components/navbar.css'
import userPic from '../images/userPic.png'

function NavBar() {
  return (
    <div className='navbar'>
      <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='netflixLog'></img>
      <img className='userPicture' src= {userPic} alt='userDP'></img>
    </div>
  )
}

export default NavBar
