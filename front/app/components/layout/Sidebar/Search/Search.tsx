import { FC } from 'react'

import SearchField from '@/components/ui/searvh-field/SearchField'

import styles from './Search.module.sass'
import SearchList from './SearchList/SearchList'
import { useSearch } from './SearchList/useSearch'

const Search: FC = () => {
	const { isSuccess, data, handleSearch, searchTerm } = useSearch()

	return (
		<div className={styles.wrapper}>
			<SearchField handleSearch={handleSearch} searchTerm={searchTerm} />
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	)
}

export default Search
