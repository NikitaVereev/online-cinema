import { FC } from 'react'

import Button from '../../form-elements/Button'

import styles from './AdminCreateButton.module.sass'

const AdminCreateButton: FC<{ onClick: () => void }> = ({ onClick }) => {
	return <Button onClick={onClick}>Создать нового</Button>
}

export default AdminCreateButton
