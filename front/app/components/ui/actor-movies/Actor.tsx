import Image from 'next/image'
import { FC } from 'react'

import { IActor, IMovie } from '@/shared/types/movies.types'

import Meta from '@/utils/meta/Meta'

import { getMovieUrl } from '@/config/url.config'

import GalleryItem from '../gallery/GalleryItem'
import Description from '../heading/Description'
import Heading from '../heading/Heading'
import SubHeading from '../heading/SubHeading'
import stylesGallery from '../trending-movies/Trending.module.sass'

import actorStyles from './Actor.module.sass'

interface IActorPage {
	movies: IMovie[]
	title: string
	description: string
	actor: IActor
}

const Actor: FC<IActorPage> = ({ actor, movies, title, description }) => {
	return (
		<Meta title={title} description={description}>
			<Heading title={title} className={stylesGallery.heading} />
			{actor && (
				<div className={actorStyles.image}>
					<p
						className={'text-lg font-light w-[60%] text-white text-opacity-60'}
					>
						{actor.description}
					</p>
					<div className={actorStyles.before}>
						<Image src={actor.photo} alt={actor.name} layout="fill" />
					</div>
				</div>
			)}
			<SubHeading title="Фильмы" />
			<section className={stylesGallery.movies}>
				{movies.map((movie) => (
					<GalleryItem
						key={movie._id}
						variant="horizontal"
						item={{
							name: movie.title,
							posterPath: movie.bigPoster,
							link: getMovieUrl(movie.slug),
							content: {
								title: movie.title,
							},
						}}
					/>
				))}
			</section>
		</Meta>
	)
}

export default Actor
