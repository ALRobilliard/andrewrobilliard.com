import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faDev, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import github from "../../../content/thumbnails/github.png"
import envelope from "../../../content/thumbnails/envelope.png"
import dev from "../../../content/thumbnails/dev.png"
import twitter from "../../../content/thumbnails/twitter.png"
import linkedin from "../../../content/thumbnails/linkedin.png"
import "./footer.css"
import { rhythm } from "../../utils/typography"

interface Props {
  message?: string
}

const Footer = ({ message }: Props) => {
  message = message || ""

  return (
    <div>
      <footer className="custom-footer">
        <div className="container"
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(36),
            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
          }}>
          <div className="links">
            <ul>
              <li>
                <a
                  href="https://github.com/ALRobilliard"
                  title="ALRobilliard on Github"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span><FontAwesomeIcon icon={faGithub} /> alrobilliard</span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/ALRobilliard"
                  title="ALRobilliard on Twitter"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span><FontAwesomeIcon icon={faTwitter} /> alrobilliard</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/andrew-robilliard/"
                  title="Andrew Robilliard on LinkedIn"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span><FontAwesomeIcon icon={faLinkedin} /> andrew-robilliard</span>
                </a>
              </li>
              <li>
                <a
                  href="https://dev.to/alrobilliard"
                  title="alrobilliard on Dev.to"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span><FontAwesomeIcon icon={faDev} /> alrobilliard</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="message">
            <p>{message}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
