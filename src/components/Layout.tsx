import { Link } from 'gatsby'
import React from 'react'
import LoginButton from './LoginButton'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from './LogoutButton'

type Props = {
	children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
	const { isAuthenticated } = useAuth0()

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

					{isAuthenticated ? <LogoutButton /> : <LoginButton />}
				</div>
			</header>

			<main className="container mx-auto py-4">{children}</main>
		</>
	)
}

export default Layout
