import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useUser } from '../hooks/useUser'

const LogoutButton = () => {
	const { logout } = useAuth0()
	const { isLoading } = useUser()

	const handleLogout = async () => {
		await logout({
			logoutParams: {
				returnTo: window.location.origin,
			},
		})
	}

	if (isLoading) {
		return (
			<button
				className="py-2 px-8 bg-gray-500 rounded-lg text-md font-medium text-white"
				disabled
			>
				Loading...
			</button>
		)
	}

	return (
		<button
			className="py-2 px-8 bg-red-500 rounded-lg text-md font-medium text-white"
			onClick={handleLogout}
		>
			Log out
		</button>
	)
}

export default LogoutButton
