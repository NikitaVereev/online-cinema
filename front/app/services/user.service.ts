import axios from 'axios'

import { IUser } from '@/shared/types/user.types'

import { getUserUrl } from '@/config/api.config'

export const UserService = {
	async getAll(searchTerm?: string) {
		return axios.get<IUser[]>(getUserUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
}
