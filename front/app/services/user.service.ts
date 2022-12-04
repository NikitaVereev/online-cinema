import axios from 'api/interceptors'

import { IProfileInput } from '@/components/screens/profile/profile.interface'

import { IUser } from '@/shared/types/user.types'

import { getUserUrl } from '@/config/api.config'

export const UserService = {
	async getAll(searchTerm?: string) {
		return axios.get<IUser[]>(getUserUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},

	async getProfile() {
		return axios.get<IUser>(getUserUrl('/profile'))
	},

	async updateProfile(data: IProfileInput) {
		return axios.put<IUser>(getUserUrl(`/profile`), data)
	},

	async getUser(_id: string) {
		return axios.get<IUser>(getUserUrl(`/${_id}`))
	},

	async updateUser(_id: string, data: IProfileInput) {
		return axios.put<string>(getUserUrl(`/${_id}`), data)
	},

	async deleteUser(_id: string) {
		return axios.delete<string>(getUserUrl(`/${_id}`))
	},
}
