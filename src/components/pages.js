import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

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

const Pages = () => {
  return (
    <>
      <h2
        css={css`
          margin-top: 2rem;
          text-align: center;
          font-size: 3rem;
        `}
      >
        CARS
      </h2>
      <Content>
        <p>Hello</p>
      </Content>
    </>
  )
}

export default Pages
