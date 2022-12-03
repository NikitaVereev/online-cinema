import { GetStaticProps, NextPage } from 'next'

import Catalog from '@/components/ui/catalog-movies/Catalog'

import { IMovie } from '@/shared/types/movies.types'

import { MovieService } from '@/services/movie.service'

const FreshPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<Catalog
			movies={movies || []}
			title={'Новинки'}
			description="Новые фильмы и сериалы, все находится здесь"
		/>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll()
		return {
			props: {
				movies,
			},
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}

export default FreshPage
