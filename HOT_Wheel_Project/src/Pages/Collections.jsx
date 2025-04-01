"use client"
import { Link } from "react-router-dom"
// Import your icons
import UserIcon from "../assets/Icons/user-circle-svgrepo-com.svg"
import CartIcon from "../assets/Icons/cart-check-svgrepo-com.svg"
import Favorite from "../assets/Icons/favorite-svgrepo-com.svg"
// Import the CSS
import "../Styles/Collections.css"

const Collections = () => {
  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <Link to="/landing">KhmerKits</Link>
        </div>

        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />

        <ul className="nav-links">
          <label htmlFor="close-btn" className="btn close-btn">
            <i className="fas fa-times"></i>
          </label>

          <li>
            <Link to="/shop">SHOP</Link>
          </li>

          <li>
            {/* Use # to prevent navigation but keep the hover effect */}
            <Link to="#" className="desktop-item" onClick={(e) => e.preventDefault()}>
              COLLECTIONS
            </Link>
            <input type="checkbox" id="showMega" />
            <label htmlFor="showMega" className="mobile-item">
              COLLECTIONS
            </label>

            <div className="mega-box">
              <div className="content">
                <div className="row">
                  <img src="/placeholder.jpg" alt="Football kit" />
                </div>

                <div className="row">
                  <header>League</header>
                  <ul className="mega-links">
                    <li>
                      <Link to="/PremierLeague">Premier League</Link>
                    </li>
                    <li>
                      <Link to="/LaLiga">La Liga</Link>
                    </li>
                    <li>
                      <Link to="/SeriaA">Seria A</Link>
                    </li>
                    <li>
                      <Link to="/Budesliga">Bundesliga</Link>
                    </li>
                    <li>
                      <Link to="/Otherleague">Others</Link>
                    </li>
                  </ul>
                </div>

                <div className="row">
                  <header>Retro</header>
                  <ul className="mega-links">
                    <li>
                      <Link to="/Acmilan">AC Milan</Link>
                    </li>
                    <li>
                      <Link to="/Realmadrid">Real Madrid</Link>
                    </li>
                    <li>
                      <Link to="/Barcelona">Barcelona</Link>
                    </li>
                    <li>
                      <Link to="/Liverpool">Liverpool</Link>
                    </li>
                    <li>
                      <Link to="/Manchester">Manchester United</Link>
                    </li>
                    <li>
                      <Link to="/Juventus">Juventus</Link>
                    </li>
                    <li>
                      <Link to="/Otherretro">Others</Link>
                    </li>
                  </ul>
                </div>

                <div className="row">
                  <header>National Team</header>
                  <ul className="mega-links">
                    <li>
                      <Link to="/Argentina">Argentina</Link>
                    </li>
                    <li>
                      <Link to="/France">France</Link>
                    </li>
                    <li>
                      <Link to="/Portugal">Portugal</Link>
                    </li>
                    <li>
                      <Link to="/Germany">Germany</Link>
                    </li>
                    <li>
                      <Link to="/Spain">Spain</Link>
                    </li>
                    <li>
                      <Link to="/Brazil">Brazil</Link>
                    </li>
                    <li>
                      <Link to="/Japan">Japan</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>

        <div className="right_panel">
          <div
            onClick={() => {
              // You can add your account modal open function here
              // For example: setIsAccountModalOpen(true)
            }}
            style={{ cursor: "pointer" }}
          >
            <img src={UserIcon || "/placeholder.svg"} alt="Account" className="Icon" />
          </div>
          <Link to="/cart">
            <img src={CartIcon || "/placeholder.svg"} alt="Cart" className="Icon" />
          </Link>
          <Link to="/favorites">
            <img src={Favorite || "/placeholder.svg"} alt="Favorites" className="Icon" />
          </Link>
        </div>

        <label htmlFor="menu-btn" className="btn menu-btn">
          <i className="fas fa-bars"></i>
        </label>
      </div>
    </nav>
  )
}

export default Collections

