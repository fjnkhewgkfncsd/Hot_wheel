"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import UserIcon from "../assets/Icons/user-circle-svgrepo-com.svg"
import CartIcon from "../assets/Icons/cart-check-svgrepo-com.svg"
import Favorite from "../assets/Icons/favorite-svgrepo-com.svg"
import "../Styles/Header.css"
import pic1 from "../assets/header/bestpic.jpg"

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  let timeoutId = null

  const handleMouseEnter = () => {
    clearTimeout(timeoutId)
    setShowDropdown(true)
  }

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setShowDropdown(false)
    }, 200) // 300ms delay before hiding the dropdown
  }
  const handleClickdropdown = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <header>
      <Link to="/">
        <p className="Logo">KhmerKIts</p>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/Shop">SHOP</Link>
          </li>
          <li className="collections-menu">
            <Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              COLLECTIONS
            </Link>
            {showDropdown && (
              <div className="dropdown-menu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="dropdown-content">
                    <img src={pic1} alt="kon papa" className="pic-header"/>
                  <div className="dropdown-column">
                    <h3>League</h3>
                    <ul>
                      <li>
                        <Link to="/collections/premier-league" onClick={handleClickdropdown}>Premier League</Link>
                      </li>
                      <li>
                        <Link to="/collections/la-liga" onClick={handleClickdropdown}>La Liga</Link>
                      </li>
                      <li>
                        <Link to="/collections/seria-a" onClick={handleClickdropdown}>Seria A</Link>
                      </li>
                      <li>
                        <Link to="/collections/bundesliga" onClick={handleClickdropdown}>Bundesliga</Link>
                      </li>
                      <li>
                        <Link to="/collections/others-league" onClick={handleClickdropdown}>Others</Link>
                      </li>
                    </ul>
                  </div>
                  <span className="span"></span>
                  <div className="dropdown-column">
                    <h3>Retro</h3>
                    <ul>
                      <li>
                        <Link to="/collections/ac-milan">AC Milan</Link>
                      </li>
                      <li>
                        <Link to="/collections/real-madrid">Real MAdrid</Link>
                      </li>
                      <li>
                        <Link to="/collections/barcelona">Barcelona</Link>
                      </li>
                      <li>
                        <Link to="/collections/liverpool">Liverpool</Link>
                      </li>
                      <li>
                        <Link to="/collections/manchester-united">Manchester United</Link>
                      </li>
                      <li>
                        <Link to="/collections/juventus">Juventus</Link>
                      </li>
                      <li>
                        <Link to="/collections/others-retro">Others</Link>
                      </li>
                    </ul>
                  </div>
                  <span className="span"></span>
                  <div className="dropdown-column">
                    <h3>National Team</h3>
                    <ul>
                      <li>
                        <Link to="/collections/argentina">Argentina</Link>
                      </li>
                      <li>
                        <Link to="/collections/france">France</Link>
                      </li>
                      <li>
                        <Link to="/collections/portugal">Portugal</Link>
                      </li>
                      <li>
                        <Link to="/collections/germany">Germany</Link>
                      </li>
                      <li>
                        <Link to="/collections/spain">Spain</Link>
                      </li>
                      <li>
                        <Link to="/collections/brazil">Brazil</Link>
                      </li>
                      <li>
                        <Link to="/collections/japan">Japan</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li>
            <Link>ABOUT</Link>
          </li>
        </ul>
      </nav>
      <div className="right_panel">
        <img src={UserIcon || "/placeholder.svg"} alt="Account" className="Icon" />
        <Link to="/Shopping_cart">
          <img src={CartIcon || "/placeholder.svg"} alt="Add to Cart" className="Icon" />
        </Link>
        <Link to="/Favorite">
          <img src={Favorite || "/placeholder.svg"} alt="Favorite" className="Icon" />
        </Link>
      </div>
    </header>
  )
}

export default Header

