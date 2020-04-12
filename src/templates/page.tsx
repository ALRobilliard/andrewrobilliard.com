import React from "react"
import { graphql } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"

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

const PageTemplate = ({ data, pageContext }: Props) => {
  const page = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={window.location} title={siteTitle}>
      <SEO
        title={page.frontmatter.title}
        description={page.frontmatter.description || page.excerpt}
      />
      <article>
        <h1
          style={{
            marginTop: rhythm(1),
          }}
        >
          {page.frontmatter.title}
        </h1>
        <section dangerouslySetInnerHTML={{ __html: page.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
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
        description
        type
      }
    }
  }
`
