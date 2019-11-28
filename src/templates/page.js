import React from "react"
import { graphql } from "gatsby"

import TopAgent from "../layouts/agent"

import "../vendor/bootstrap/css/bootstrap.min.css"
import "../vendor/fontawesome-free/css/all.min.css"

export default ({ data, pageContext }) => {
  const cityData = data.contentfulCity
  const { pageType, pageData, siteData } = pageContext

  const photoData = {
      header: cityData.headerImage.fluid,
      logo: data.logo.childImageSharp.fixed
  }

  if (pageType) {
      return <TopAgent data={cityData} pageType={pageType} pageData={pageData} siteData={siteData} photoData={photoData} />
  } else {
      return <div />
  }
}

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    contentfulCity(slug: {eq: $slug}) {
      cityName
      slug
      greaterAreaName
      provinceCode
      creaStatsPage
      areaPhoneNumber
      headerImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      contactImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      associationImages {
        fixed(width: 200) {
          ...GatsbyContentfulFixed_withWebp
        }
        description
      }
      ctaImages {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      cityDescription {
        cityDescription
      }
      subRegions {
        regionName
        regionImage {
          fluid(maxWidth: 300) {
            ...GatsbyContentfulFluid_withWebp
          }
          description
        }
        regionDescription {
          regionDescription
        }
      }
    }
    logo: file(relativePath: {eq: "weblogo.png"}) {
      childImageSharp {
        fixed(height: 36) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`
