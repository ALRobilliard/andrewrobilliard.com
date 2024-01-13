import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { rhythm } from "../utils/typography"

const Profile = () => {
  const data = useStaticQuery(graphql`
    query ProfileQuery {
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
            dev
            github
            linkedin
            twitter
          }
        }
      }
    }
  `)
  const { author } = data.site.siteMetadata
  console.log(data.avatar);
  return (
    <div
      style={{
        height: "100%",
        verticalAlign: "middle",
        position: "relative",
      }}
    >
      <div
        id="bio-picture"
        style={{
          margin: "0",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <GatsbyImage
          image={data.avatar.childImageSharp.gatsbyImageData}
          alt={author.name}
          style={{
            height: `200px`,
            width: `200px`,
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      </div>
      <div id="links"></div>
    </div>
  )
}

export default Profile
