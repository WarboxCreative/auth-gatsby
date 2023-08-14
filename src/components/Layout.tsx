import { Link } from 'gatsby'
import React from 'react'
import LoginButton from './LoginButton'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from './LogoutButton'
import { useUser } from '../hooks/useUser'

type Props = {
	children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
	const { isAuthenticated } = useAuth0()
	const { user, isLoading } = useUser()

	return (
		<>
			<header className="py-4 bg-slate-200">
				<div className="container mx-auto flex flex-row justify-between items-center">
					<ul className="flex flex-row space-x-6">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/normal-page">Normal Page</Link>
						</li>
						<li>
							<Link to="/protected-page">Protected Page</Link>
						</li>
						<li>
							<Link to="/silver-protected-page">Silver Protected Page</Link>
						</li>
					</ul>

					<div className="flex flex-row items-center space-x-4">
						{isLoading ? <p>Loading...</p> : null}

						{user && !isLoading ? <p>Logged in as {user.name}</p> : null}

						{isAuthenticated ? <LogoutButton /> : <LoginButton />}
					</div>
				</div>
			</header>

			<main className="container mx-auto py-4">{children}</main>
		</>
	)
}

export default Layout
