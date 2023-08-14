import React from 'react'
import Layout from '../components/Layout'

import { useAuth0 } from '@auth0/auth0-react'
import { withAuthenticationRequired } from '@auth0/auth0-react'

const ProtectedPage = () => {
	const { user } = useAuth0()

	return (
		<Layout>
			<h1 className="text-2xl">ProtectedPage</h1>
		</Layout>
	)
}

export default withAuthenticationRequired(ProtectedPage)
