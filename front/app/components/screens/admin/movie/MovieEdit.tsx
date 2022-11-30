import dynamic from 'next/dynamic'
import { FC } from 'react'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { Controller, useForm } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'

import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import Button from '@/components/ui/form-elements/Button'
import Field from '@/components/ui/form-elements/Field'
import SlugField from '@/components/ui/form-elements/SlugField/SlugField'
import Heading from '@/components/ui/heading/Heading'
import SkeletonLoader from '@/components/ui/heading/SkeletonLoader'

import formStyles from '@/ui/form-elements/admin-form.module.sass'

import Meta from '@/utils/meta/Meta'
import generateSlug from '@/utils/string/generateSlug'

import { IMovieEditInput } from './movie-edit.interface'
import { useMovieEdit } from './useMovieEdit'

const DynamicTextEditor = dynamic(
	() => import('../../../ui/form-elements/TextEditor'),
	{
		ssr: false,
	}
)

const MovieEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IMovieEditInput>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit } = useMovieEdit(setValue)

	return (
		<Meta title="Редактирование жанра">
			<AdminNavigation />
			<Heading title="Редактирование жанра" />
			<form className={formStyles.form} onSubmit={handleSubmit(onSubmit)}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={formStyles.fields}>
							<Field
								{...register('title', {
									required: 'name is required',
								})}
								placeholder="Название"
								error={errors.title}
								style={{ width: '31%' }}
							/>
							<div style={{ width: '31%' }}>
								<SlugField
									register={register}
									generate={() => {
										setValue('slug', generateSlug(getValues('title')))
									}}
									error={errors.slug}
								/>
							</div>
						</div>

						<Button>Обновить</Button>
					</>
				)}
			</form>
		</Meta>
	)
}

export default MovieEdit
