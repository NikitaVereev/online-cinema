import { FC } from 'react'

import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/components/ui/admin-table/AdminHeader'
import AdminTable from '@/components/ui/admin-table/AdminTable/AdminTable'
import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import { useMovies } from './useMovies'

const UserList: FC = () => {
	const {
		handleSearch,
		isLoading,
		searchTerm,
		data,
		deleteAsync,
		createAsync,
	} = useMovies()

	return (
		<Meta
			title="Редактирование фильмов"
			description="Просмотр фильмов и телевизионных программ в вашем браузере"
		>
			<AdminNavigation />
			<Heading title="Фильмы" />
			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Название', 'Жанр', 'Рейтинг', 'Взаимодействие']}
				tableItems={data || []}
			/>
		</Meta>
	)
}

export default UserList
