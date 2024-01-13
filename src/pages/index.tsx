import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

interface Props {
  data: {
    allMarkdownRemark: any
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const BlogIndex = ({ data }: Props) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      <Bio />
      {posts.map(({ node }: any) => {
        const title = node.frontmatter.title || node.fields.slug
        const icon = node.frontmatter.icon
        const articleType = node.frontmatter.type
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4)
                }}
              >
                <Link
                  style={{ boxShadow: `none`, color: `var(--textTitle)` }}
                  to={node.fields.slug}
                >
                  {icon ? icon + ` ` : ``}
                  {title}
                </Link>
              </h3>
              <small>
                {node.frontmatter.date}
                <span
                  style={{
                    color: '#ff4f00'
                  }}>
                  {''} // {articleType}
                </span>
              </small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: {date: DESC} }
      filter: { frontmatter: { template: { ne: "page" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            type
            link
            icon
            projectIcons {
              name
              cssClass
            }
          }
        }
      }
    }
  }
`
