import React from 'react'
import "./Menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {

const handleCloseMenu=()=>{
  setMenuOpen(false)
}

  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
        <li onClick={handleCloseMenu}>
          <a href="#intro">Intro</a>
        </li>
        <li onClick={handleCloseMenu}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={handleCloseMenu}>
          <a href="#works">works</a>
        </li>
        <li onClick={handleCloseMenu}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={handleCloseMenu}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}
