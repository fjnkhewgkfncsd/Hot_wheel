"use client"

import { useState, useEffect } from "react"
import "../Styles/Header.css"
import Account from "../Pages/Account"
import Modal from "../Pages/Modal"
import "../Styles/Modal.css"
import Collections from "../Pages/Collections"

const Header = () => {
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false)

  // Debounced scroll handler to close modal
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
    <>
      {/* Use the Collections component for navigation */}
      <Collections />

      {/* Account Modal */}
      {isAccountModalOpen && (
        <Modal isOpen={isAccountModalOpen} onClose={() => setIsAccountModalOpen(false)}>
          <Account />
        </Modal>
      )}
    </>
  )
}

export default Header

