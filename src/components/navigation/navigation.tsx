import React from "react"
import { Link } from "gatsby"
import "./navigation.css"

const Navigation = () => {
  return (
    <div>
      <div className="navbar-fixed">
        <nav className="nav-wrapper">
          <div className="container">
            <Link className="brand-logo" to={`/`}>{`{ AndrewR }`}</Link>
            <ul className="nav-links">
              <li>
                <Link className="nav-link" to={`/about-me`}>
                  About Me
                </Link>
              </li>
              <li>
                <Link className="nav-link" to={`/projects`}>
                  Projects
                </Link>
              </li>
              <li>
                <Link className="nav-link" to={`/blog`}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div style={{ width: "100%", height: "64px" }}></div>
    </div>
  )
}

export default Navigation
