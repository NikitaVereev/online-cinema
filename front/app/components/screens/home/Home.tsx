import { FC } from 'react'
import { toastr } from 'react-redux-toastr'

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
			<button onClick={() => toastr.success('Auth', 'You have successfuly')}>
				Show more
			</button>
		</Meta>
	)
}

export default Home
