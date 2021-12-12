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
          I'm Andrew Robilliard, a software developer working primarily within the
          Microsoft ecosystem.
        </p>
        <p>These days, my time is filled with <mark>Microsoft Dataverse</mark> and the <mark>Microsoft Power Platform</mark>. I frequently write code using <mark>C#</mark>, <mark>JavaScript/TypeScript</mark>, and <mark>SQL</mark>.
        </p>
        <p>
          Sometimes, I tweet about my thoughts, my side-projects, or anything else that's on my mind.
          {` `}
          <a href={`https://twitter.com/${social.twitter}`} target="_blank">
            Maybe you should follow me on Twitter?
          </a>
        </p>
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
