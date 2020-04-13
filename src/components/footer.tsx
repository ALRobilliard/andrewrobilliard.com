import React from "react"
import github from "../../content/thumbnails/github.png"
import gatsby from "../../content/thumbnails/gatsby.png"
import typescript from "../../content/thumbnails/typescript.png"
import aws from "../../content/thumbnails/aws.png"

interface Props {
  message?: string
}

const Footer = ({ message }: Props) => {
  const footerStle = {
    height: "122px",
    lineHeight: "122px",
  } as React.CSSProperties
  const messageStyle = {
    float: "left",
  } as React.CSSProperties

  const iconGroupStyle = {
    float: "right",
    height: "100%",
    position: "relative",
  } as React.CSSProperties

  const iconLinkStyle = {
    display: "inline-block",
    marginLeft: "1rem",
    width: "2rem",
  } as React.CSSProperties

  const iconStyle = {
    width: "2rem",
    position: "absolute",
    top: "0",
    bottom: "0",
    margin: "auto",
  } as React.CSSProperties

  message = message || ""

  return (
    <footer style={footerStle}>
      <div style={messageStyle}>{message}</div>
      <div style={iconGroupStyle}>
        <a
          style={iconLinkStyle}
          href="https://github.com/ALRobilliard/andrewrobilliard.com"
          title="Open-source on Github"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={github} alt="GitHub" style={iconStyle} />
        </a>
        <a
          style={iconLinkStyle}
          href="https://www.gatsbyjs.org/"
          title="Built with Gatsby"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={gatsby} alt="Gatsby" style={iconStyle} />
        </a>
        <a
          style={iconLinkStyle}
          href="https://www.typescriptlang.org/"
          title="Built with TypeScript"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={typescript} alt="TypeScript" style={iconStyle} />
        </a>
        <a
          style={iconLinkStyle}
          href="https://aws.amazon.com/"
          title="Hosted on AWS"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={aws} alt="AWS" style={iconStyle} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
