import type { GatsbyConfig } from 'gatsby'

// Import .env variables
require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
	siteMetadata: {
		title: `My Gatsby Auth Site`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		{
			resolve: 'gatsby-source-sanity',
			options: {
				projectId: process.env.GATSBY_SANITY_PROJECT_ID,
				dataset: process.env.GATSBY_SANITY_PROJECT_DATASET,
				token: process.env.GATSBY_SANITY_READ_TOKEN,
			},
		},
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-postcss',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
	],
}

export default config
