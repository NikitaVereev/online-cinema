import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { title } from 'process'
import { FC } from 'react'

import styles from './Gallery.module.sass'
import { IGalleryItemProps } from './gallery.interface'

const GalleryItem: FC<IGalleryItemProps> = ({ item, variant }) => {
	return (
		<Link
			href={item.link}
			className={cn(
				styles.item,
				{ [styles.withText]: item.content },
				{ [styles.horizontal]: variant === 'horizontal' },
				{ [styles.vertical]: variant === 'vertical' }
			)}
		>
			<Image
				className={styles.img}
				alt={item.name}
				src={item.posterPath}
				layout="fill"
				draggable={false}
				priority={true}
			/>
			{item.content && (
				<div className={styles.content}>
					<div className={styles.title}>{item.content.title}</div>
					<div className={styles.subTitle}>{item.content.subTitle}</div>
				</div>
			)}
		</Link>
	)
}

export default GalleryItem
