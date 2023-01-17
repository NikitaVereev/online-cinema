import { GetStaticProps, NextPage } from 'next'

import Discovery from '@/components/screens/discovery/Discovery'
import { ICollection } from '@/components/screens/discovery/discovery.interface'

import { GenreService } from '@/services/genre.service'

import Error404 from './404'

const DiscoveryPage: NextPage<{ collections: ICollection[] }> = ({
	collections,
}) => {
	return collections ? (
		<Discovery collections={collections || []} />
	) : (
		<Error404 />
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: collections } = await GenreService.getDiscovery()

		return {
			props: {
				collections,
			},
			revalidate: 60,
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}

export default DiscoveryPage
