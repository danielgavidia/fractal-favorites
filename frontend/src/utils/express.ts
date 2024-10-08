import axios from "axios";
import type { Movie, User } from "../../../backend/types/types";
import { getAuth } from "firebase/auth";

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

// Get all movies, filtering for key words in description
export const getMoviesDescription = async (description: string): Promise<Movie[]> => {
	const res = await axios({
		method: "GET",
		url: `${import.meta.env.VITE_EXPRESS_BASE_URL}/movies/descriptions?description=${description}`,
	});
	const data: Movie[] = res.data;
	return data;
};

// Add movie to user favorites
export const addUserMovie = async (movieId: string): Promise<User> => {
	const auth = getAuth();
	const user = auth.currentUser;
	if (!user) {
		throw new Error("User not authenticated");
	}

	const idToken = await user?.getIdToken();
	const res = await axios({
		method: "POST",
		url: `${import.meta.env.VITE_EXPRESS_BASE_URL}/movies/user/addmovie/${movieId}`,
		headers: {
			Authorization: `Bearer ${idToken}`,
		},
	});
	const data: User = res.data;
	return data;
};

// Get all of a user's movies
export const getUserMovies = async (): Promise<Movie[]> => {
	const auth = getAuth();
	const user = auth.currentUser;
	if (!user) {
		throw new Error("User not authenticated");
	}
	const idToken = await user.getIdToken();
	const res = await axios({
		method: "POST",
		url: `${import.meta.env.VITE_EXPRESS_BASE_URL}/movies/user`,
		headers: {
			Authorization: `Bearer ${idToken}`,
		},
	});
	const data: Movie[] = res.data;
	return data;
};
