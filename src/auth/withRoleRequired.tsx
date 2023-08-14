import React from 'react'

import { UserRoles } from '../context/UserContext'
import { useUser } from '../hooks/useUser'

function hasAccess(userRole: UserRoles, desiredRole: UserRoles): boolean {
	const roles = {
		0: 'bronze',
		1: 'silver',
		2: 'gold',
	} as const

	type RoleHierarchy = keyof typeof roles

	const userRoleIndex = Object.values(roles).indexOf(userRole)
	const desiredRoleIndex = Object.values(roles).indexOf(desiredRole)

	if (userRoleIndex === -1 || desiredRoleIndex === -1) {
		return false // Invalid roles
	}

	return userRoleIndex >= desiredRoleIndex
}

export const withRoleRequired = (Component: React.FC, role: UserRoles) => {
	const { user } = useUser()

	if (user) {
		const access = hasAccess(user.role, role)

		console.log(access)
	}
}
