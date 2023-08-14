import React from 'react'
import { UserContext } from '../context/UserContext'
import { useAuth0 } from '@auth0/auth0-react'
import { useClient } from '../hooks/useClient'

type Props = {
	children: React.ReactNode
}

export const UserProvider = (props: Props) => {
	const [sanityUser, setSanityUser] = React.useState(null)
	const [isLoading, setIsLoading] = React.useState(true)

	const { user } = useAuth0()
	const client = useClient()

	React.useMemo(() => {
		if (user && user.sub) {
			const id = user.sub

			client.fetch(`*[_type == "user" && auth0Id == "${id}"]`).then((doc) => {
				setIsLoading(false)
				setSanityUser(doc[0])
			})
		}

		setIsLoading(false)
	}, [user])

	return (
		<UserContext.Provider
			value={{
				user: sanityUser,
				isLoading,
			}}
		>
			{props.children}
		</UserContext.Provider>
	)
}
