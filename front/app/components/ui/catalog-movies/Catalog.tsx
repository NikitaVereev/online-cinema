import { FC } from 'react'

import Meta from '@/utils/meta/Meta'

import { getMovieUrl } from '@/config/url.config'

import GalleryItem from '../gallery/GalleryItem'
import Description from '../heading/Description'
import Heading from '../heading/Heading'

import styles from './Catalog.module.sass'
import { ICatalog } from './catalog.interface'

const Catalog: FC<ICatalog> = ({ movies, title, description }) => {
	return (
		<Meta title={title} description={description}>
			<Heading title={title} className={styles.heading} />
			{description && (
				<Description text={description} className={styles.description} />
			)}
			<section className={styles.movies}>
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

export default Catalog
