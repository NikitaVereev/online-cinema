import cn from 'classnames'
import Link from 'next/link'
import { FC } from 'react'

import { getGenreUrl } from '@/config/url.config'

import styles from './Discovery.module.sass'
import DiscoveryImages from './DiscoveryImages'
import { ICollection } from './discovery.interface'

const DiscoveryItem: FC<{ collection: ICollection }> = ({ collection }) => {
	return (
		<Link href={getGenreUrl(collection.slug)} className={styles.collection}>
			<DiscoveryImages collection={collection} />

			<div className={styles.content}>
				<div className={styles.title}>{collection.title}</div>
			</div>

			<div className={cn(styles.behind, styles.second)}>
				<DiscoveryImages collection={collection} />
			</div>

			<div className={cn(styles.behind, styles.third)}>
				<DiscoveryImages collection={collection} />
			</div>
		</Link>
	)
}

export default DiscoveryItem
