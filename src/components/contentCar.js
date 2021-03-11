import React from "react"
import { Link } from "gatsby"
import { Button } from "react-bootstrap"
import Image from "gatsby-image"

const ContentCar = ({ item }) => {
  return (
    <div style={{ border: "1px solid #e1e1e1", marginBottom: "2rem" }}>
      <Image fluid={item.image.fluid} />
      <div className="p-3">
        <h3>{item.title}</h3>
        <p>{item.content}</p>
        <Button as={Link} variant="dark" to={item.slug} block>
          More Details
        </Button>
      </div>
    </div>
  )
}

export default ContentCar
