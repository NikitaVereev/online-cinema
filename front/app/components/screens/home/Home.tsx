import { FC } from 'react'
import { toastr } from 'react-redux-toastr'

import Heading from '@/components/ui/heading/Heading'
import Slider from '@/components/ui/slider/Slider'

import Meta from '@/utils/meta/Meta'

import { IHome } from './home.interface'

const Home: FC<IHome> = ({ slides }) => {
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
		</Meta>
	)
}

export default Home
