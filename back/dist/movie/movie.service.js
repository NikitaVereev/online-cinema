"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const telegram_service_1 = require("../telegram/telegram.service");
const movie_model_1 = require("./movie.model");
let MovieService = class MovieService {
    constructor(MovieModel, telegramService) {
        this.MovieModel = MovieModel;
        this.telegramService = telegramService;
    }
    async getAll(searchTerm) {
        let options = {};
        if (searchTerm)
            options = {
                $or: [
                    {
                        title: new RegExp(searchTerm, 'i'),
                    },
                ],
            };
        return this.MovieModel.find(options)
            .select('-updatedAt -_v')
            .sort({ createdAt: 'desc' })
            .populate('actors genres')
            .exec();
    }
    async bySlug(slug) {
        const doc = await this.MovieModel.findOne({ slug })
            .populate('actors genres')
            .exec();
        if (!doc)
            throw new common_1.NotFoundException('Not found movie!');
        return doc;
    }
    async byActor(actorId) {
        const docs = await this.MovieModel.find({ actors: actorId }).exec();
        if (!docs)
            throw new common_1.NotFoundException('Not found movie!');
        return docs;
    }
    async byGenres(genreIds) {
        const docs = await this.MovieModel.find({ $in: genreIds }).exec();
        if (!docs)
            throw new common_1.NotFoundException('Not found movie!');
        return docs;
    }
    async updateCountOpened(slug) {
        return this.MovieModel.findOneAndUpdate({ slug }, { $inc: { countOpened: 1 } }).exec();
    }
    async getMostPopular() {
        return this.MovieModel.find({ countOpened: { $gt: 0 } })
            .sort({ countOpened: -1 })
            .populate('genres')
            .exec();
    }
    async updateRating(id, newRating) {
        return this.MovieModel.findByIdAndUpdate(id, {
            rating: newRating,
        }, {
            new: true,
        }).exec();
    }
    async byId(_id) {
        const doc = await this.MovieModel.findById(_id);
        if (!doc)
            throw new common_1.NotFoundException('Movie not found');
        return doc;
    }
    async create() {
        const defaultValue = {
            bigPoster: '',
            actors: [],
            genres: [],
            poster: '',
            title: '',
            videoUrl: '',
            slug: '',
        };
        const movie = await this.MovieModel.create(defaultValue);
        return movie._id;
    }
    async update(_id, dto) {
        if (!dto.isSendTelegram) {
            await this.sendNotification(dto);
            dto.isSendTelegram = true;
        }
        const updateDoc = await this.MovieModel.findByIdAndUpdate(_id, dto, {
            new: true,
        }).exec();
        if (!updateDoc)
            throw new common_1.NotFoundException('Not found movie');
        return updateDoc;
    }
    async delete(id) {
        const deleteDoc = await this.MovieModel.findByIdAndDelete(id).exec();
        if (!deleteDoc)
            throw new common_1.NotFoundException('Not found Movie');
        return deleteDoc;
    }
    async sendNotification(dto) {
        await this.telegramService.sendPhoto('https://images.unsplash.com/photo-1668342433263-d9669a2e3b85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80');
        const msg = `<b>${dto.title}</b>`;
        await this.telegramService.sendMessage(msg, {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            url: 'https://hd.kinopoisk.ru/?rt=487b7bbec6b7dff6905a9936ca991332&watch=',
                            text: 'Go to watch',
                        },
                    ],
                ],
            },
        });
    }
};
MovieService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(movie_model_1.MovieModel)),
    __metadata("design:paramtypes", [Object, telegram_service_1.TelegramService])
], MovieService);
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map