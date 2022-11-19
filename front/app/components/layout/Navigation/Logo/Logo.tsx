import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logoImage from '../../../../assets/images/logo.svg'

import styles from './Logo.module.sass'

const Logo: FC = () => {
	return (
		<Link href="/" className={styles.logo}>
			<div>
				<Image alt="logo" src={logoImage} width={247} height={34} draggable />
			</div>
		</Link>
	)
}

export default Logo
