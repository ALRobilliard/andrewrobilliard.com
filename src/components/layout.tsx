import React from "react"
import Navigation from "./navigation/navigation"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
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
        <Footer message={`© ${new Date().getFullYear()}, Andrew Robilliard`} />
      </div>
    </div>
  )
}

export default Layout
