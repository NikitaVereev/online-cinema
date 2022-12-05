import dynamic from 'next/dynamic'
import { FC } from 'react'

import Banner from '@/components/ui/banner/Banner'
import Gallery from '@/components/ui/gallery/Gallery'
import SubHeading from '@/components/ui/heading/SubHeading'

import Meta from '@/utils/meta/Meta'

import { IMoviePage } from '../../../../pages/movie/[slug]'

import Content from './Content/Content'
import { useUpdateCountOpened } from './Rating/useUpdateCountOpened'

const DynamicVideo = dynamic(
	() => import('@/components/ui/video-palyer/VideoPlayer'),
	{
		ssr: false,
	}
)
const DynamicRating = dynamic(() => import('./Rating/RateMovie'), {
	ssr: false,
})

const SingleMovie: FC<IMoviePage> = ({ movie, similarMovies }) => {
	useUpdateCountOpened(movie.slug)
	return (
		<Meta title={movie.title} description={`Смотреть ${movie?.title}`}>
			<Banner
				image={movie.bigPoster}
				Detail={() => <Content movie={movie} />}
			/>
			<DynamicVideo slug={movie.slug} videoSources={movie.videoUrl} />
			<div className="mt-12">
				<SubHeading title="Похожее" />
				<Gallery items={similarMovies} />
				<DynamicRating slug={movie.slug} movieId={movie._id} />
			</div>
		</Meta>
	)
}

export default SingleMovie
