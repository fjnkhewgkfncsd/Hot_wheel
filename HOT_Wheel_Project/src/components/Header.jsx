"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
// CHANGE: Added proper imports for Modal and Account components
import Modal from "../Pages/Modal"
import Account from "../Pages/Account"
import "../Styles/Header.css"

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  let timeoutId = null
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false)

  const handleMouseEnter = () => {
    clearTimeout(timeoutId)
    setShowDropdown(true)
  }

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setShowDropdown(false)
    }, 200) // 200ms delay before hiding the dropdown
  }

  const handleClickdropdown = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    let scrollTimer

    const handleScroll = () => {
      clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => {
        if (isAccountModalOpen) {
          setIsAccountModalOpen(false)
        }
      }, 100) // 100ms delay after scrolling stops
    }

    if (isAccountModalOpen) {
      window.addEventListener("scroll", handleScroll)
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(scrollTimer)
    }
  }, [isAccountModalOpen])

  return (
    // CHANGE: Added React Fragment to properly wrap the JSX
    <>
      {/* CHANGE: Fixed conditional rendering of Modal */}
      {isAccountModalOpen && (
        <Modal isOpen={isAccountModalOpen} onClose={() => setIsAccountModalOpen(false)}>
          <Account />
        </Modal>
      )}
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
                    {/* CHANGE: Used placeholder image */}
                    <img src="/placeholder.svg?height=300&width=400" alt="Collection preview" className="pic-header" />
                    <div className="dropdown-column">
                      <h3>League</h3>
                      <ul>
                        <li>
                          <Link to="/collections/premier-league" onClick={handleClickdropdown}>
                            Premier League
                          </Link>
                        </li>
                        <li>
                          <Link to="/collections/la-liga" onClick={handleClickdropdown}>
                            La Liga
                          </Link>
                        </li>
                        <li>
                          <Link to="/collections/seria-a" onClick={handleClickdropdown}>
                            Seria A
                          </Link>
                        </li>
                        <li>
                          <Link to="/collections/bundesliga" onClick={handleClickdropdown}>
                            Bundesliga
                          </Link>
                        </li>
                        <li>
                          <Link to="/collections/others-league" onClick={handleClickdropdown}>
                            Others
                          </Link>
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
                          {/* CHANGE: Fixed typo in "Real Madrid" */}
                          <Link to="/collections/real-madrid">Real Madrid</Link>
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
              {/* CHANGE: Added proper to="/about" for About link */}
              <Link to="/about">ABOUT</Link>
            </li>
          </ul>
        </nav>
        <div className="right_panel">
          {/* CHANGE: Added onClick handler to open modal and used placeholder image */}
          <img
            src="/placeholder.svg?height=24&width=24"
            alt="Account"
            className="Icon"
            onClick={() => setIsAccountModalOpen(true)}
          />
          <Link to="/Shopping_cart">
            {/* CHANGE: Used placeholder image */}
            <img src="/placeholder.svg?height=24&width=24" alt="Add to Cart" className="Icon" />
          </Link>
          <Link to="/Favorite">
            {/* CHANGE: Used placeholder image */}
            <img src="/placeholder.svg?height=24&width=24" alt="Favorite" className="Icon" />
          </Link>
        </div>
      </header>
    </>
  )
}

export default Header

