import React from "react"
import { Link, graphql } from "gatsby"

import BioSml from "../components/bio-sml"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import IconList from "../components/icon-list"
import GitHubButton from "react-github-btn"

interface Props {
  data: {
    markdownRemark: any
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
  pageContext: any
}

interface ProjectIcon {
  name: string
  cssClass: string
}

const BlogPostTemplate = ({ data, pageContext }: Props) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  const projectIcons = post.frontmatter.projectIcons as ProjectIcon[]
  const sourceLink = post.frontmatter.link as string

  return (
    <Layout location={window.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date}
          </p>
          {projectIcons != null && projectIcons.length > 0 && (
            <div>
              <IconList icons={projectIcons} />
              <hr
                style={{
                  marginBottom: rhythm(1),
                }}
              />
            </div>
          )}
        </header>
        {sourceLink != null && (
          <div
            style={{
              marginBottom: "0.5rem",
            }}
          >
            <GitHubButton
              href={sourceLink}
              data-size="large"
              data-show-count="true"
            >
              Source
            </GitHubButton>
          </div>
        )}
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <BioSml />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && previous.frontmatter.type == post.frontmatter.type && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && next.frontmatter.type == post.frontmatter.type && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "dddd, DD MMMM, YYYY")
        description
        type
        link
        projectIcons {
          name
          cssClass
        }
      }
    }
  }
`
