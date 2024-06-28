import React from 'react'
import './styles.css'

const ButtonNav = () => {
  return (
    <header className='header'>
        <a href="" className='logo'>Logo</a>
        <nav className='nav'>
            <input type="checkbox" className='checkbox' id='checkbox' />
            <label htmlFor="checkbox" className='label-menu'>
                Menu<span className='hamburguer'></span>
            </label>
            <ul className='menu'>
                <li><a href="">Sobre</a></li>
                <li><a href="">Projetos</a></li>
                <li><a href="">Contatos</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default ButtonNav