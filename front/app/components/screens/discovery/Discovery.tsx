import { FC } from 'react'

import Description from '@/components/ui/heading/Description'
import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import styles from './Discovery.module.sass'
import DiscoveryItem from './DiscoveryItem'
import { ICollection } from './discovery.interface'

const description = 'В этой секции находятся все жанры этого сайта'

const Collections: FC<{ collections: ICollection[] }> = ({ collections }) => {
	return (
		<Meta title="Коллекции" description={description}>
			<Heading title="Коллекции" className={styles.heading} />
			<Description text={description} className={styles.description} />

			<section className={styles.collections}>
				{collections.map((c) => (
					<DiscoveryItem key={c._id} collection={c} />
				))}
			</section>
		</Meta>
	)
}

export default Collections
