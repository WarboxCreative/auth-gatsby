import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
	const { isLoading, loginWithRedirect } = useAuth0()

	const handleLogin = async () => {
		console.log(window.location.pathname)

		await loginWithRedirect({
			appState: {
				returnTo: window.location.pathname,
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
			className="py-2 px-8 bg-green-500 rounded-lg text-md font-medium text-white"
			onClick={handleLogin}
		>
			Log in
		</button>
	)
}

export default LoginButton
