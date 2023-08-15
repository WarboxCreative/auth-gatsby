import { createClient } from '@sanity/client'

export const useClient = () => {
	return createClient({
		projectId: process.env.GATSBY_SANITY_PROJECT_ID,
		dataset: process.env.GATSBY_SANITY_PROJECT_DATASET,
		token: process.env.GATSBY_SANITY_READ_TOKEN,
	})
}
