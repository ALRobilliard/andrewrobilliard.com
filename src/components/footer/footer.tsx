import React from "react"
import github from "../../../content/thumbnails/github.png"
import envelope from "../../../content/thumbnails/envelope.png"
import dev from "../../../content/thumbnails/dev.png"
import linkedin from "../../../content/thumbnails/linkedin.png"
import twitter from "../../../content/thumbnails/twitter.png"
import "./footer.css"

interface Props {
  message?: string
}

const Footer = ({ message }: Props) => {
  message = message || ""

  return (
    <div>
      <div className="divider">
        <span>//</span>
      </div>
      <footer className="custom-footer">
        <div className="message">{message}</div>
        <div className="icon-group">
          <a
            href="mailto:andrew_robilliard@outlook.com"
            title="Email me at andrew_robilliard@outlook.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={envelope} alt="Envelope" />
          </a>
          <a
            href="https://dev.to/alrobilliard"
            title="alrobilliard on Dev.to"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={dev} alt="Dev.to" />
          </a>
          <a
            href="https://www.linkedin.com/in/andrew-robilliard/"
            title="Andrew Robilliard on LinkedIn"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/ALRobilliard/andrewrobilliard.com"
            title="ALRobilliard on Github"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={github} alt="GitHub" />
          </a>
          <a
            href="https://twitter.com/ALRobilliard"
            title="ALRobilliard on Twitter"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={twitter} alt="Twitter" />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
