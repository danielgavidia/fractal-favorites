import prisma from "./prisma";
import type { Movie, User } from "../types/types";

// Add movie to user's list
export const addUserMovie = async (firebaseId: string, movieId: string): Promise<User> => {
	// Update user
	const updatedUser: User = await prisma.user.update({
		where: {
			firebaseId: firebaseId,
		},
		data: {
			movies: {
				connect: { id: movieId },
			},
		},
		include: {
			movies: true, // optional, add user's movies in response
		},
	});
	return updatedUser;
};

// Get all of a user's movies
export const getUserMovies = async (firebaseId: string): Promise<Movie[]> => {
	const user = await prisma.user.findUnique({
		where: {
			firebaseId: firebaseId,
		},
		include: {
			movies: true,
		},
	});
	if (!user) {
		throw new Error("User not found");
	}
	const movies: Movie[] = user.movies;
	return movies;
};

// Get single movie, using id
export const getMovie = async (id: string): Promise<Movie> => {
	const res: Movie | null = await prisma.movie.findUnique({
		where: {
			id: id,
		},
	});
	if (!res) {
		throw new Error("Movie not found");
	}
	return res;
};

// Get all movie data
export const getMovies = async (): Promise<Movie[]> => {
	const res: Movie[] = await prisma.movie.findMany({});
	return res;
};

// Get all movies, filtering for key words in description
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
