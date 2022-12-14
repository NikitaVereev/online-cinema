import { Injectable, NotFoundException } from '@nestjs/common'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { InjectModel } from 'nestjs-typegoose'
import { ActorDto } from './actor.dto'
import { ActorModel } from './actor.model'

@Injectable()
export class ActorService {
	constructor(
		@InjectModel(ActorModel) private readonly ActorModel: ModelType<ActorModel>,
	) {}

	async bySlug(slug: string) {
		const doc = await this.ActorModel.findOne({ slug }).exec()
		if (!doc) throw new NotFoundException('Актера нет!')

		return doc
	}

	async getAll(searchTerm?: string) {
		let options = {}

		if (searchTerm)
			options = {
				$or: [
					{
						name: new RegExp(searchTerm, 'i'),
					},
					{
						slug: new RegExp(searchTerm, 'i'),
					},
				],
			}

		return this.ActorModel.aggregate()
			.match(options)
			.lookup({
				from: 'Movie',
				localField: '_id',
				foreignField: 'actors',
				as: 'movies',
			})
			.addFields({
				countMovies: {
					$size: '$movies',
				},
			})
			.project({ __v: 0, updatedAt: 0, movies: 0 })
			.sort({ createdAt: -1 })
			.exec()
	}

	// Admin place

	async byId(_id: string) {
		const actor = await this.ActorModel.findById(_id)
		if (!actor) throw new NotFoundException('Актеров нет!')

		return actor
	}

	async create() {
		const defaultValue: ActorDto = {
			name: '',
			slug: '',
			photo: '',
			description: '',
		}
		const actor = await this.ActorModel.create(defaultValue)

		return actor._id
	}

	async update(_id: string, dto: ActorDto) {
		const updateDoc = await this.ActorModel.findByIdAndUpdate(_id, dto, {
			new: true,
		}).exec()
		if (!updateDoc) throw new NotFoundException('Актера нет!')

		return updateDoc
	}

	async delete(id: string) {
		const deleteDoc = this.ActorModel.findByIdAndDelete(id).exec()
		if (!deleteDoc) throw new NotFoundException('Актера нет!')

		return deleteDoc
	}
}
