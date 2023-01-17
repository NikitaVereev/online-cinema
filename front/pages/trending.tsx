import { GetStaticProps, NextPage } from 'next'

import Trending from '@/components/ui/trending-movies/Trending'

import { IMovie } from '@/shared/types/movies.types'

import { MovieService } from '@/services/movie.service'

const TrendingPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<Trending
			movies={movies || []}
			title={'Популярое'}
			description="Популярные фильмы и сериалы, все находится здесь"
		/>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const movies = await MovieService.getMostPopularMovies()
		return {
			props: {
				movies,
			},
			revalidate: 60,
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}

export default TrendingPage
