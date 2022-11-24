import { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { getAdminHomeUrl } from '@/config/url.config'

import MenuItem from '../MenuItem'

import LogoutButton from './LogoutButton'

const AuthItems: FC = () => {
	const { user } = useAuth()
	return (
		<>
			{user ? (
				<>
					<MenuItem
						item={{
							icon: 'MdSettings',
							link: '/profile',
							title: 'Профиль',
						}}
					/>
					<LogoutButton />
				</>
			) : (
				<>
					<MenuItem
						item={{
							icon: 'MdLogin',
							link: '/auth',
							title: 'Логин',
						}}
					/>
				</>
			)}
			{user?.isAdmin && (
				<MenuItem
					item={{
						icon: 'MdOutlineLock',
						link: getAdminHomeUrl(),
						title: 'Админ панель',
					}}
				/>
			)}
		</>
	)
}

export default AuthItems
