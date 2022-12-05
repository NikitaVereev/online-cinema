import { FC } from 'react'
import StarRating from 'react-star-rating-component'

import AuthButton from '@/components/ui/video-palyer/AuthPlaceholder/AuthButton'

import { useAuth } from '@/hooks/useAuth'

import styles from './RateMovie.module.sass'
import { useRateMovie } from './useRateMovie'

interface IRateMovie {
	movieId: string
	slug: string
}

const RateMovie: FC<IRateMovie> = ({ movieId, slug }) => {
	const { user } = useAuth()

	const { handleClick, isSended, rating } = useRateMovie(movieId)

	return (
		<div className={styles.wrapper}>
			<h3>Поставьте отметку данному фильму</h3>
			<p>Оценка влияет на рекомендации</p>
			{user ? (
				<>
					{isSended ? (
						<div className={styles.thanks}>Спасибо за оценку!</div>
					) : (
						<StarRating
							name="star-rating"
							value={rating}
							onStarClick={handleClick}
							emptyStarColor="#4f4f4f"
						/>
					)}
				</>
			) : (
				<AuthButton slug={slug} />
			)}
		</div>
	)
}

export default RateMovie
