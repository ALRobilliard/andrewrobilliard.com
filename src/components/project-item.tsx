import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import GitHubButton from "react-github-btn"

interface Props {
  project: {
    title: string
    description: string
    link: string
    slug: string
  }
}

const ProjectItem = ({ project }: Props) => {
  return (
    <div>
      <h3
        style={{
          marginBottom: rhythm(1 / 4),
        }}
      >
        <Link style={{ boxShadow: `none`, color: `#253031` }} to={project.slug}>
          {project.title}
        </Link>
      </h3>
      <GitHubButton
        href={project.link}
        data-size="large"
        data-show-count="true"
      >
        Source
      </GitHubButton>
    </div>
  )
}

export default ProjectItem
