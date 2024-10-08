import { useEffect, useState } from "react";

import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import { getMovies, getMoviesDescription } from "../utils/express";

import type { Movie } from "../../../backend/types/types";
import { useNavigate } from "react-router-dom";

const RouteSearch = () => {
	const [movies, setMovies] = useState<Movie[]>([]);
	const navigate = useNavigate();

	// Filter movies based on description
	const handleSearchMovies = async (description: string): Promise<void> => {
		const res: Movie[] = await getMoviesDescription(description);
		setMovies(res);
	};

	// Fetch movies
	useEffect(() => {
		const fetchMovies = async () => {
			const res: Movie[] = await getMovies();
			setMovies(res);
		};
		fetchMovies();
	}, []);

	return (
		<div className="w-full h-full bg-base-100 p-4 flex flex-col">
			<SearchBar handleSearchMovies={handleSearchMovies} />
			<MovieList movies={movies} navigate={navigate} />
		</div>
	);
};

export default RouteSearch;
