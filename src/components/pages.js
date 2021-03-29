import React from "react"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Layout from "./layout"

const Content = styled.main`
  padding-top: 2rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
  }

  p {
    line-height: 2;
  }
`

export const query = graphql`
  query($slug: String!) {
    allDatoCmsCar(filter: { slug: { eq: $slug } }) {
      nodes {
        slug
        title
        content
        image {
          fluid(maxWidth: 1200) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

const Pages = ({
  data: {
    allDatoCmsCar: { nodes },
  },
}) => {
  const { title, content, image } = nodes[0]

  return (
    <Layout>
      <h2
        css={css`
          margin-top: 2rem;
          text-align: center;
          font-size: 3rem;
        `}
      >
        {title}
      </h2>
      <Content>
        <p>{content}</p>
        <Image fluid={image.fluid} />
      </Content>
    </Layout>
  )
}

export default Pages
