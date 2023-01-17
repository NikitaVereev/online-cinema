import dynamic from 'next/dynamic'
import { FC } from 'react'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { Controller, useForm } from 'react-hook-form'

import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import Button from '@/components/ui/form-elements/Button'
import Field from '@/components/ui/form-elements/Field'
import SlugField from '@/components/ui/form-elements/SlugField/SlugField'
import UploadField from '@/components/ui/form-elements/uploadField/UploadField'
import Heading from '@/components/ui/heading/Heading'
import SkeletonLoader from '@/components/ui/heading/SkeletonLoader'

import formStyles from '@/ui/form-elements/admin-form.module.sass'

import Meta from '@/utils/meta/Meta'
import generateSlug from '@/utils/string/generateSlug'

import { IMovieEditInput } from './movie-edit.interface'
import { useAdminActor } from './useAdminActor'
import { useAdminGenre } from './useAdminGenre'
import { useMovieEdit } from './useMovieEdit'

const DynamicSelect = dynamic(() => import('@/components/ui/select/Select'), {
	ssr: false,
})

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

	const { isLoading: isActorsLoading, data: actors } = useAdminActor()

	const { isLoading: isGenresLoading, data: genres } = useAdminGenre()

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
									required: 'Title is required',
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
						<div className={formStyles.fields}>
							<Field
								{...register('parameters.country', {
									required: 'Country is required',
								})}
								placeholder="Страна"
								error={errors.parameters?.country}
								style={{ width: '31%' }}
							/>
							<Field
								{...register('parameters.duration', {
									required: 'Duration is required',
								})}
								placeholder="Длительность (мин)"
								error={errors.parameters?.duration}
								style={{ width: '31%' }}
							/>
							<Field
								{...register('parameters.year', {
									required: 'Год is required',
								})}
								placeholder="Год"
								error={errors.parameters?.year}
								style={{ width: '31%' }}
							/>
						</div>
						<div className={formStyles.fields}>
							<Controller
								control={control}
								name="genres"
								render={({ field, fieldState: { error } }) => (
									<DynamicSelect
										field={field}
										//@ts-ignore
										options={genres || {}}
										isLoading={isGenresLoading}
										isMulti
										placeholder="Жанры"
										error={error}
									/>
								)}
								rules={{
									required: 'Пожалуйста, введите хоть один жанр!',
								}}
							/>
							<Controller
								control={control}
								name="actors"
								render={({ field, fieldState: { error } }) => (
									<DynamicSelect
										field={field}
										//@ts-ignore
										options={actors || {}}
										isLoading={isActorsLoading}
										isMulti
										placeholder="Актеры"
										error={error}
									/>
								)}
								rules={{
									required: 'Пожалуйста, введите хоть одного актера!',
								}}
							/>
						</div>
						<div className={formStyles.fields}>
							<Controller
								control={control}
								name="poster"
								defaultValue=""
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										placeholder="Постер"
										error={error}
										folder="movies"
									/>
								)}
								rules={{
									required: 'Poster is required',
								}}
							/>
							<Controller
								control={control}
								name="bigPoster"
								defaultValue=""
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										placeholder="Баннер"
										error={error}
										folder="movies"
									/>
								)}
								rules={{
									required: 'BigPoster is required',
								}}
							/>
						</div>
						<Controller
							control={control}
							name="videoUrl"
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField
									onChange={onChange}
									value={value}
									placeholder="Видео"
									error={error}
									folder="movies"
									style={{ marginTop: -25 }}
									isNoImage
								/>
							)}
							rules={{
								required: 'VideoUrl is required',
							}}
						/>

						<Button>Обновить</Button>
					</>
				)}
			</form>
		</Meta>
	)
}

export default MovieEdit
