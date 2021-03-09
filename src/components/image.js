import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const ImgBackground = styled(BackgroundImage)`
  height: 600px;
`
const Text = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(34, 49, 63, 0.01),
    rgba(34, 49, 63, 0.01)
  );
  color: #fff;
  margin-top: 50px;
  height: "100%";
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 3rem;
    margin-top: 2rem;
  }

  p {
    font-size: 1.5rem;
  }
`

const Image = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "car4.jpg" }) {
        sharp: childImageSharp {
          fluid {
            srcSetWebp
          }
        }
      }
    }
  `)

  return (
    <ImgBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <Text>
        <h1>SAVE ON YOUR CAR RENTAL WITH LUXURY</h1>
        <p>Monthly rate, fully customizable, cancel at any time.*</p>
      </Text>
    </ImgBackground>
  )
}

export default Image
