/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allDatoCmsCar {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("No results found", result.errors)
  }

  const pages = result.data.allDatoCmsCar.nodes

  pages.forEach(element => {
    actions.createPage({
      path: element.slug,
      component: require.resolve("./src/components/pages.js"),
      context: {
        slug: element.slug,
      },
    })
  })
}
