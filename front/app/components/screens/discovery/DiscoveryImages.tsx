import Image from 'next/image'
import { FC } from 'react'

import styles from './Discovery.module.sass'
import { ICollection } from './discovery.interface'

const DiscoveryImages: FC<{ collection: ICollection }> = ({
	collection: { image, title },
}) => {
	return <Image src={image} alt={title} layout="fill" draggable={false} />
}

export default DiscoveryImages
