import React from "react"
import Navigation from "./navigation/navigation"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
import Footer from "./footer/footer"

interface Props {
  children?: any
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navigation />
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(36),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer message={`A personal blog by Andrew Robilliard where he collects his thoughts and learnings on Microsoft Dynamics 365, PowerApps, Common Data Service, Azure, ASP.NET Core or what ever else he's into.`} />
    </div>
  )
}

export default Layout
