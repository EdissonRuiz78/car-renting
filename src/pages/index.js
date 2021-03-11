import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import Image from "../components/image"
import ContentHome from "../components/contentHome"
import ContentCar from "../components/contentCar"
import UseGetCar from "../hooks/useGetCar"

const CardInfo = styled.ul`
  max-width: 1200px;
  width: 90%;
  margin: 2rem auto;
  padding: 0;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
  }

  p {
    line-height: 1.8;
  }
`

const IndexPage = () => {
  const information = UseGetCar()

  return (
    <Layout>
      <Image />
      <ContentHome />
      <h2 style={{ textAlign: "center", marginTop: "3rem" }}>
        DON’T DREAM IT, DRIVE IT!
      </h2>
      <CardInfo>
        {information.map(item => (
          <ContentCar key={item.id} item={item} />
        ))}
      </CardInfo>
    </Layout>
  )
}
export default IndexPage
