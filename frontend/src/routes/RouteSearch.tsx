import { useEffect, useState } from "react";

import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import { getMovies, getMoviesDescription } from "../utils/express";

import type { Movie } from "../../../backend/types/types";

const RouteSearch = () => {
	const [movies, setMovies] = useState<Movie[]>([]);

	// Filter movies based on description
	const handleSearchMovies = async (description: string): Promise<void> => {
		const res: Movie[] = await getMoviesDescription(description);
		setMovies(res);
	};

	// Fetch movies
	useEffect(() => {
		const fetchMovies = async () => {
			const res = await getMovies();
			setMovies(res);
		};
		fetchMovies();
	}, []);

	return (
		<div className="w-full h-full bg-gray-400">
			<SearchBar handleSearchMovies={handleSearchMovies} />
			<MovieList movies={movies} />
		</div>
	);
};

export default RouteSearch;
