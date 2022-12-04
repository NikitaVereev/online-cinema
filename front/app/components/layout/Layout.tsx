import cn from 'classnames'
import { FC, useState } from 'react'

import styles from './Layout.module.sass'
import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'

const Layout: FC = ({ children }: any) => {
	const [open, setOpen] = useState(true)

	return (
		<>
			<button
				onClick={() => setOpen(!open)}
				className="text-white absolute z-50"
			>
				X
			</button>
			<div className={cn(styles.layout, `${!open ? `${styles.active}` : ''}`)}>
				{open && <Navigation />}
				<div className={styles.center}>{children}</div>
				{open && <Sidebar />}
			</div>
		</>
	)
}

export default Layout
