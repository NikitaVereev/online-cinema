import cn from 'classnames'
import { FC } from 'react'

import styles from './AdminTable.module.sass'

const AdminTableHeader: FC<{ headerItems: string[] }> = ({ headerItems }) => {
	return (
		<div className={cn(styles.item, styles.itemHeader)}>
			{headerItems.map((value) => (
				<div key={value}>{value}</div>
			))}
		</div>
	)
}

export default AdminTableHeader
