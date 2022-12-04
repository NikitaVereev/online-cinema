import { FC } from 'react'
import { useForm } from 'react-hook-form'

import Button from '@/components/ui/form-elements/Button'
import Heading from '@/components/ui/heading/Heading'
import SkeletonLoader from '@/components/ui/heading/SkeletonLoader'

import Meta from '@/utils/meta/Meta'

import AuthFields from '../auth/AuthFields'

import styles from './Profile.module.sass'
import { IProfileInput } from './profile.interface'
import { useProfile } from './useProfile'

const Profile: FC = () => {
	const { handleSubmit, register, formState, setValue } =
		useForm<IProfileInput>({
			mode: 'onChange',
		})

	const { isLoading, onSubmit } = useProfile(setValue)

	return (
		<Meta title="Профиль">
			<Heading title="Профиль" />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				{isLoading ? (
					<SkeletonLoader count={2} />
				) : (
					<>
						<AuthFields formState={formState} register={register} />
						<Button>Обновить</Button>
					</>
				)}
			</form>
		</Meta>
	)
}

export default Profile
