const Promise = require('bluebird')
const path = require("path")

exports.createPages = ({ graphql, actions }) => {

  const { createPage } = actions

  return new Promise((resolve, reject) => {

    resolve(
      graphql(
        `{
            allContentfulPage(filter: {node_locale: {eq: "en-CA"}}) {
              edges {
                node {
                  pageType
                  componentPath
                  slugs
                  pageTitle
                  metaDescription
                  structuredData {
                    internal {
                      content
                    }
                  }
                  cities {
                    slug
                  }
                  sections {
                    content {
                      content {
                        content
                      }
                    }
                    type
                  }
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const nodes = result.data.allContentfulPage.edges

        nodes.forEach(node => {
            const page = node.node
            const { cities, slugs, sections } = page

            let pageData = {}

            sections.forEach(section => {
                pageData[section.type] = section.content
            })

            let siteData = {
                pageTitle: page.pageTitle,
                metaDescription: page.metaDescription,
                structuredData: page.structuredData.internal.content
            }

            slugs.forEach(pageSlug => {
                cities.forEach(city => {

                    siteData.pageSlug = `${pageSlug.replace("{city}", city.slug)}`

                    createPage({
                        path: `/${pageSlug.replace("{city}", city.slug)}`,
                        component: path.resolve(page.componentPath),
                        context: {
                            slug: city.slug,
                            pageType: pageSlug.replace("-{city}", ""),
                            pageData: pageData,
                            siteData: siteData
                        }
                    })
                })
            })
        })
      })
    )
  })
}
