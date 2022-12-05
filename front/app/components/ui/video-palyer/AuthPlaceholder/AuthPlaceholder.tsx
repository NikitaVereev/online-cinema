import { FC } from 'react'

import AuthButton from './AuthButton'
import styles from './AuthPlaceholder.module.sass'

const AuthPlaceholder: FC<{ slug: string }> = ({ slug }) => {
	return (
		<div className={styles.placeholder}>
			<div>
				<div>Пожалуйста, войдите в систему, чтобы начать просмотр</div>
				<AuthButton slug={slug} />
			</div>
		</div>
	)
}

export default AuthPlaceholder
