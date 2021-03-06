require("dotenv").config()


module.exports = {
  siteMetadata: {
    title: `Naszokraj`,
    siteUrl: `https://naszokraj.eu`,
    description: `Prowadzimy kompleksowy serwis oraz wymianę kotłów gazowych. Jesteśmy autoryzowanymi przedstawicielami marek dostarczających ciepło.`,
    twitter: `@naszokraj`,
    author: `@kryptonum.studio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Mulish\:400,600,700,900`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Naszokraj`,
        short_name: `naszokraj`,
        lang: `pl`,
        start_url: `/`,
        background_color: `#EF5F38`,
        theme_color: `#EF5F38`,
        display: `minimal-ui`,
        icon: `static/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.API_DATO_CMS,
      },
    },    
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: true,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
