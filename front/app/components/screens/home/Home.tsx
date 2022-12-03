import { FC } from 'react'
import { toastr } from 'react-redux-toastr'

import Gallery from '@/components/ui/gallery/Gallery'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/heading/SubHeading'
import Slider from '@/components/ui/slider/Slider'

import Meta from '@/utils/meta/Meta'

import { IHome } from './home.interface'

const Home: FC<IHome> = ({ slides, actors, trendingMovies }) => {
	return (
		<Meta
			title="Просмотр фильмов онлайн"
			description="Просмотр фильмов и телевизионных программ в вашем браузере"
		>
			<Heading
				title="Просмотр фильмов онлайн"
				className="text-gray-300 mb-8 text-xl"
			/>
			{slides.length && <Slider slides={slides} />}
			<div className="my-10">
				<SubHeading title="Популярные" />
				{trendingMovies.length && <Gallery items={trendingMovies} />}
			</div>

			<div>
				<SubHeading title="Лучшие актеры" />
				{actors && <Gallery items={actors} />}
			</div>
		</Meta>
	)
}

export default Home
