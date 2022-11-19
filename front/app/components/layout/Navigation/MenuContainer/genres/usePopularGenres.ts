import { useQuery } from 'react-query'

import { GenreService } from '@/services/genre.service'

import { getGenreUrl } from '@/config/url.config'

export const usePopularGenres = () => {
	const queryData = useQuery('popular genre menu', () => {
		GenreService.getAll(),
			{
				select: ({ data }: any) =>
					data
						.map((genre: any) => ({
							icon: genre.icon,
							link: getGenreUrl(genre.slug),
							title: genre.name,
						}))
						.splice(0, 4),
			}
	})

	return queryData
}
