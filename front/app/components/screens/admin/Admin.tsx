import { FC } from 'react'

import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import styles from './Admin.module.sass'
import Statistics from './Statistics/Statistics'

const Admin: FC = () => {
	return (
		<Meta title="Админ панель">
			<AdminNavigation />
			<Heading title="Статистика" />
			<Statistics />
		</Meta>
	)
}

export default Admin
