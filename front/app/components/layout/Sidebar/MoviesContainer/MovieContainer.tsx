import dynamic from 'next/dynamic'
import { FC } from 'react'

import PopularMovies from './PopularMovies'

const DynamicFavorites = dynamic(
	() => import('./FavoritesMovies/FavoriteMovies'),
	{
		ssr: false,
	}
)

const MovieContainer: FC = () => {
	return (
		<div>
			<PopularMovies />
			<DynamicFavorites />
		</div>
	)
}

export default MovieContainer
