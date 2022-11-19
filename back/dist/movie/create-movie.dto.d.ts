export declare class Parameters {
    year: number;
    duration: number;
    country: string;
}
export declare class CreateMovieDto {
    poster: string;
    bigPoster: string;
    title: string;
    slug: string;
    parameters?: Parameters;
    videoUrl: string;
    genres: string[];
    actors: string[];
    isSendTelegram?: boolean;
}
