import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { rhythm } from "../utils/typography"

const BioSml = () => {
  const data = useStaticQuery(graphql`
    query BioSmlQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            bluesky
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <GatsbyImage
        image={data.avatar.childImageSharp.gatsbyImageData}
        alt={author.name}
        style={{
          height: `50px`,
          width: `50px`,
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p style={{ margin: 'auto' }}>
        Written by <strong>{author.name}</strong> {author.summary}
        {` `}
        <a href={`https://bsky.app/profile/${social.bluesky}`} target="_blank">
          You should follow me on Bluesky.
        </a>
      </p>
    </div>
  )
}

export default BioSml
