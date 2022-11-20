import { FC } from 'react'

import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import { IHome } from './home.interface'

const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Просмотр фильмов онлайн"
			description="Просмотр фильмов и телевизионных программ в вашем браузере"
		>
			<Heading
				title="Просмотр фильмов онлайн"
				className="text-gray-300 mb-8 text-xl"
			/>
		</Meta>
	)
}

export default Home
