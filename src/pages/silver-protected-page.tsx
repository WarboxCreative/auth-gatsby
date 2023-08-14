import React from 'react'
import Layout from '../components/Layout'

import { useAuth0 } from '@auth0/auth0-react'
import { withAuthenticationRequired } from '@auth0/auth0-react'

const SilverProtectedPage = () => {
	const { user } = useAuth0()

	console.log(user)

	return (
		<Layout>
			<h1 className="text-2xl">SilverProtectedPage</h1>
		</Layout>
	)
}

export default withAuthenticationRequired(SilverProtectedPage)
