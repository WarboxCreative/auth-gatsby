import { createClient } from '@sanity/client'

export const useClient = () => {
	return createClient({
		projectId: process.env.SANITY_PROJECT_ID,
		dataset: process.env.SANITY_PROJECT_DATASET,
		token: process.env.SANITY_READ_TOKEN,
	})
}
