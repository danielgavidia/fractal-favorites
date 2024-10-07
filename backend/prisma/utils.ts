import prisma from "./prisma";
import type { Movie } from "../types/types";

// get all movie data
export const getMovies = async (): Promise<Movie[]> => {
	const res: Movie[] = await prisma.movie.findMany({});
	return res;
};

// get all movies, filtering for favorites
export const getMoviesFavorites = async (favorites: boolean): Promise<Movie[]> => {
	if (favorites) {
		const res: Movie[] = await prisma.movie.findMany({
			where: {
				favorite: true,
			},
		});
		return res;
	} else if (!favorites) {
		const res: Movie[] = await prisma.movie.findMany({
			where: {
				favorite: false,
			},
		});
		return res;
	} else {
		return [];
	}
};

// get all movies, filtering for key words in description
export const getMoviesDescription = async (description: string): Promise<Movie[]> => {
	if (description) {
		const keywords = description.split(" ");
		const res: Movie[] = await prisma.movie.findMany({
			where: {
				AND: keywords.map((keyword) => ({
					description: {
						contains: keyword,
						mode: "insensitive",
					},
				})),
			},
		});
		return res;
	} else {
		return [];
	}
};
