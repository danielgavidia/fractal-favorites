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
	} else {
		const res: Movie[] = await prisma.movie.findMany({
			where: {
				favorite: false,
			},
		});
		return res;
	}
};
