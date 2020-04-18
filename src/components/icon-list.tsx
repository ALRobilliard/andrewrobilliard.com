import React from "react"
import Devicon from "./devicon"

interface Props {
  icons: {
    name: string
    cssClass: string
  }[]
}

const IconList = ({ icons }: Props) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      {icons.map(icon => (
        <Devicon key={icon.name} cssClass={icon.cssClass} size={"3.5rem"} />
      ))}
    </div>
  )
}

export default IconList
