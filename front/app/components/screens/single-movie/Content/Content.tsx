import { FC } from 'react'

import { MaterialIcon } from '@/components/ui/MaterialIcon'

import { IMovie } from '@/shared/types/movies.types'

import { getActorUrl, getGenreUrl } from '@/config/url.config'

import styles from './Content.module.sass'
import ContentList from './ContentList'

const Content: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.content}>
			<h1>{movie.title}</h1>
			<div className={styles.details}>
				<span>Год:{movie.parameters.year}. </span>
				<span>Страна:{movie.parameters.country}. </span>
				<span>Длительность:{movie.parameters.duration} min.</span>
			</div>
			<ContentList
				name="Жанры"
				links={movie.genres.slice(0, 3).map((g) => ({
					_id: g._id,
					link: getGenreUrl(g.slug),
					title: g.name,
				}))}
			/>
			<ContentList
				name="Актеры"
				links={movie.actors.slice(0, 3).map((a) => ({
					_id: a._id,
					link: getActorUrl(a.slug),
					title: a.name,
				}))}
			/>

			<div className={styles.rating}>
				<MaterialIcon name="MdStarRate" />
				<span>{movie.rating.toFixed(1)}</span>
			</div>
		</div>
	)
}

export default Content
