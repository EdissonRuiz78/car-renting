import { useStaticQuery, graphql } from "gatsby"

const UseGetCar = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsCar {
        nodes {
          title
          content
          id
          slug
          image {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  return data.allDatoCmsCar.nodes.map(item => ({
    title: item.title,
    id: item.id,
    content: item.content,
    slug: item.slug,
    image: item.image,
  }))
}

export default UseGetCar
