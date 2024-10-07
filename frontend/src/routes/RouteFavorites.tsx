import { useState, useEffect } from "react";
import type { Movie } from "../../../backend/types/types";
import { getMoviesFavorites } from "../utils/express";
import MovieCard from "../components/MovieCard";

const RouteFavorites = () => {
	const [movies, setMovies] = useState<Movie[]>([]);

	// Fetch movies
	useEffect(() => {
		const fetchMovies = async () => {
			const res: Movie[] = await getMoviesFavorites(true);
			setMovies(res);
		};
		fetchMovies();
	}, []);
	return (
		<div>
			{movies.map((movie) => {
				return <MovieCard movie={movie} />;
			})}
		</div>
	);
};

export default RouteFavorites;
