import React from "react"

interface Props {
  name: string
  version: string
  size?: string
}

const Devicon = ({ name, version, size }: Props) => {
  const baseUrl = "https://cdn.rawgit.com/konpa/devicon/master/icons/"
  const iconUrl = `${baseUrl}/${name}/${name}-${version}.svg`

  return (
    <img
      src={iconUrl}
      alt={name}
      style={{ maxWidth: `${size || "3rem"}`, marginRight: "1rem" }}
    />
  )
}

export default Devicon
