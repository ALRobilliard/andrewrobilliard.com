import React from "react"
import Devicon from "./devicon"

interface Props {
  icons: {
    name: string
    version: string
  }[]
}

const IconList = ({ icons }: Props) => {
  const iconListStyle = {}

  return (
    <div style={iconListStyle}>
      {icons.map(icon => (
        <Devicon
          key={icon.name}
          name={icon.name}
          version={icon.version}
          size={"5rem"}
        />
      ))}
    </div>
  )
}

export default IconList
