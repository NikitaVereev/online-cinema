import cn from 'classnames'
import { title } from 'process'
import { FC } from 'react'
import { useQuery } from 'react-query'

import SkeletonLoader from '@/components/ui/heading/SkeletonLoader'

import { AdminService } from '@/services/auth/admin.services'

import styles from '../Admin.module.sass'

const CountUsers: FC = () => {
	const { isLoading, data: response } = useQuery('Count users', () =>
		AdminService.getCountUsers()
	)

	return (
		<div className={cn(styles.block, styles.countUsers)}>
			<div>
				{isLoading ? (
					<SkeletonLoader />
				) : (
					<div className={styles.number}>
						{response?.data}
						<div className={styles.description}>Пользователя</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default CountUsers
