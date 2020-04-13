import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import "./navigation.css"
import useWindowDimensions from "../window-dimensions"

const Navigation = () => {
  const [isScrolled, setScrolled] = useState<boolean>()
  const topOfPage = !window.pageYOffset
  const classes = !isScrolled
    ? "navbar-fixed"
    : "navbar-fixed navbar-scroll bottom-shadow"
  const { height, width } = useWindowDimensions()

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 1) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      // unregister event
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div>
      <div className={classes}>
        <nav className="nav-wrapper">
          <div className="container">
            <Link className="brand-logo" to={`/`}>
              {width >= 460 ? `Andrew Robilliard` : `AR`}
            </Link>
            <ul className="nav-links">
              <li>
                <Link className="nav-link" to={`/about-me`}>
                  About Me
                </Link>
              </li>
              <li>
                <Link className="nav-link" to={`/contact`}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div style={{ width: "100%", height: "122px" }}></div>
    </div>
  )
}

export default Navigation
