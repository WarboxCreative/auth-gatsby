import React from 'react'
import Layout from '../components/Layout'

import { useAuth0 } from '@auth0/auth0-react'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import { useUser } from '../hooks/useUser'

import { navigate } from 'gatsby'
import { withRoleRequired } from '../auth/withRoleRequired'

const SilverProtectedPage = () => {
	const { user } = useUser()

	const test = withRoleRequired(<div></div>, 'silver')

	if (!user || user.role !== 'silver') {
		navigate('/')
	}

	return (
		<Layout>
			<h1 className="text-2xl">SilverProtectedPage</h1>
		</Layout>
	)
}

export default withAuthenticationRequired(SilverProtectedPage)
