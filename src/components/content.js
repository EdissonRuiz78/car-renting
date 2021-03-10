import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { Button } from "react-bootstrap"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Image from "gatsby-image"

const Text = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  padding-top: 2rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 4rem;
  }

  p {
    line-height: 2;
  }
`

const Content = () => {
  const information = useStaticQuery(graphql`
    query MyQuery {
      allDatoCmsPage(filter: { slug: { eq: "home" } }) {
        nodes {
          title
          content
          image {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  const { title, content, image } = information.allDatoCmsPage.nodes[0]

  return (
    <>
      <h2
        css={css`
          text-align: center;
          font-size: 2.8rem;
          margin-top: 2rem;
        `}
      >
        {title}
      </h2>
      <Text>
        <div>
          <p>{content}</p>
          <Button variant="dark">Book now</Button>
          <Button className="m-2" variant="dark" as={Link} to="/about">
            More{" "}
          </Button>
        </div>
        <Image fluid={image.fluid} />
      </Text>
    </>
  )
}

export default Content
