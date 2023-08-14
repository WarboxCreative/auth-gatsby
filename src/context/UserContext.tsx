import { createContext } from 'react'

export type UserRoles = 'bronze' | 'silver' | 'gold'

export type UserType = {
	_type: 'user'
	_id: string
	auth0Id: string
	email: string
	name: string
	role: UserRoles
} | null

type UserContextType = {
	user: UserType
	isLoading: boolean
}

export const UserContext = createContext<UserContextType>({
	user: null,
	isLoading: true,
})
