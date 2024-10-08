import { useState, useEffect } from "react";
import type { Movie } from "../../../backend/types/types";
import { getUserMovies } from "../utils/express";
import MovieList from "../components/MovieList";

const RouteFavorites = () => {
	const [movies, setMovies] = useState<Movie[]>([]);

	// Fetch movies
	useEffect(() => {
		const fetchMovies = async () => {
			const res: Movie[] = await getUserMovies();
			setMovies(res);
		};
		fetchMovies();
	}, []);
	return (
		<div className="p-4 w-full h-full">
			<MovieList movies={movies} />
		</div>
	);
};

export default RouteFavorites;
