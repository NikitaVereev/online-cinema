import { IMovie } from '@/shared/types/movies.types'

export interface ITrending {
	title: string
	description?: string
	movies: IMovie[]
}
