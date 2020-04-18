import React from "react"

interface Props {
  cssClass: string
  size?: string
}

const Devicon = ({ cssClass, size }: Props) => {
  return (
    <i
      className={cssClass}
      style={{ fontSize: `${size || "3rem"}`, marginRight: "1rem" }}
    />
  )
}

export default Devicon
