import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Image = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "car1.jpg" }) {
        sharp: childImageSharp {
          fluid {
            srcSetWebp
          }
        }
      }
    }
  `)

  console.log(image)

  return <h1>Image</h1>
}

export default Image
