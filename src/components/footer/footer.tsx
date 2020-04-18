import React from "react"
import github from "../../../content/thumbnails/github.png"
import gatsby from "../../../content/thumbnails/gatsby.png"
import typescript from "../../../content/thumbnails/typescript.png"
import aws from "../../../content/thumbnails/aws.png"
import "./footer.css"

interface Props {
  message?: string
}

const Footer = ({ message }: Props) => {
  message = message || ""

  return (
    <footer className="custom-footer">
      <div className="message">{message}</div>
      <div className="icon-group">
        <a
          href="https://github.com/ALRobilliard/andrewrobilliard.com"
          title="Open-source on Github"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={github} alt="GitHub" />
        </a>
        <a
          href="https://www.gatsbyjs.org/"
          title="Built with Gatsby"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={gatsby} alt="Gatsby" />
        </a>
        <a
          href="https://www.typescriptlang.org/"
          title="Built with TypeScript"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={typescript} alt="TypeScript" />
        </a>
        <a
          href="https://aws.amazon.com/"
          title="Hosted on AWS"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={aws} alt="AWS" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
