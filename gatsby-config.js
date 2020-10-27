require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: 'My Test E-commerce Store',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'OTQ2ZTE1YmItZTc0Ny00YzdlLThhNDgtN2I4M2RjOTgxZDg5NjM3MzkyOTI5NDg5NTUxODUw',
        autopop: false
      }
    },
  ],
}
