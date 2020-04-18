import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GitHubButton from "react-github-btn"
import Profile from "./profile"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/andrew-2019.jpg/" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: "flex",
        marginBottom: rhythm(2.5),
      }}
    >
      <div
        id="bio-text"
        style={{
          width: "60%",
        }}
      >
        <h1>Hey, I'm Andrew 👋</h1>
        <p>
          I'm a full-stack developer making things in C#, JavaScript, and a few
          other things.
          {` `}
          <a href={`https://twitter.com/${social.twitter}`} target="_blank">
            You should follow me on Twitter
          </a>
        </p>
        <div>
          <GitHubButton
            href="https://github.com/alrobilliard"
            data-size="large"
            data-show-count="true"
          >
            alrobilliard
          </GitHubButton>
        </div>
      </div>
      <div
        id="profile"
        style={{
          width: "40%",
        }}
      >
        <Profile />
      </div>
    </div>
  )
}

export default Bio
