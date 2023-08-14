import React from 'react'

import { UserContext } from '../context/UserContext'

export const useUser = () => {
	return React.useContext(UserContext)
}
