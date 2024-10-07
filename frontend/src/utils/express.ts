import axios from "axios";
import type { Movie } from "../../../backend/types/types";

// Get all movies
export const getMovies = async (): Promise<Movie[]> => {
	const res = await axios({
		method: "GET",
		url: `${import.meta.env.VITE_EXPRESS_BASE_URL}/movies`,
	});
	const data: Movie[] = res.data;
	return data;
};

// Get all movies, filtering for favorites
export const getMoviesFavorites = async (favorite: boolean): Promise<Movie[]> => {
	const favoriteString = favorite.toString();
	const res = await axios({
		method: "GET",
		url: `${import.meta.env.VITE_EXPRESS_BASE_URL}/movies/favorites?favorite=${favoriteString}`,
	});
	const data: Movie[] = res.data;
	return data;
};

// Get all movies, filtering for key words in description
export const getMoviesDescription = async (description: string): Promise<Movie[]> => {
	const res = await axios({
		method: "GET",
		url: `${import.meta.env.VITE_EXPRESS_BASE_URL}/movies/description?description=${description}`,
	});
	const data: Movie[] = res.data;
	return data;
};
