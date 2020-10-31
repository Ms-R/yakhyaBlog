import React from 'react'
import {Link} from 'react-router-dom'

const SideBar = ({onClick}) => {
    return (
        <div className="sideBar">
          <div className="sideBar__logo">
            <Link to="/">
              <i className="fab fa-joomla"></i>
            </Link>
          </div>
          <div className="sideBar__menu">
            <ul className="sideBar__menu__list">
              <li>
                <i className="far fa-home-alt"></i>
                <Link to="/" onClick={onClick} className='click'>Home</Link>
              </li>
              <li>
                <i className="far fa-user"></i>
                <Link to="/about" onClick={onClick}>About</Link>
              </li>
              <li>
                <i className="fas fa-briefcase"></i>
                <Link to="/works" onClick={onClick}>Works</Link>
              </li>
              <li>
                <i className="far fa-address-book"></i>
                <Link to="/contact" onClick={onClick}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="sideBar__social">
            <ul className="sideBar__social__list">
              <li>
                <a href="https://vk.com/feed">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://vk.com/feed">
                  <i className="fab fa-telegram"></i>
                </a>
              </li>
              <li>
                <a href="https://vk.com/feed">
                  <i className="fab fa-vk"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
    )
}

export default SideBar
