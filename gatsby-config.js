let contentfulConfig

try {
    // Load the Contentful config from the .contentful.json
    contentfulConfig = require('./.contentful')
  } catch (_) {}

  // Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
    spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
    accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulConfig.accessToken,
  }


module.exports = {
  siteMetadata: {
    siteUrl: `https://www.keylo.ca`
  },
  plugins: [
    `gatsby-disable-404`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`100`, `400`, `700`],
          },
          {
            family: `Kaushan Script`,
          },
          {
            family: `Droid Serif`,
            variants: [`400`, `700`, `400italic`, `700italic`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-hubspot`,
      options: {
          trackingCode: `4036258`,
          respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-hotjar-tracking`,
      options: {
        includeInDevelopment: false,
        id: 993675,
        sv: 6
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/seo-sitemap.xml`
      }
    },    
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`,
      },
    },
    {
        resolve: `gatsby-source-contentful`,
        options: contentfulConfig,
    }
  ],
}
