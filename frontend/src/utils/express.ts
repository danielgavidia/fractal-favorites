import axios from "axios";
import type { Movie } from "../../../backend/types/types";

// Get single movie
export const getMovie = async (id: string): Promise<Movie> => {
	const res = await axios({
		method: "GET",
		url: `${import.meta.env.VITE_EXPRESS_BASE_URL}/movies/individual/${id}`,
	});
	const data: Movie = res.data;
	return data;
};

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
	console.log(description);
	const res = await axios({
		method: "GET",
		url: `${import.meta.env.VITE_EXPRESS_BASE_URL}/movies/descriptions?description=${description}`,
	});
	const data: Movie[] = res.data;
	return data;
};
