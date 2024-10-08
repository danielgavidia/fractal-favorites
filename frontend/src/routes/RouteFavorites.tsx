import { useState, useEffect } from "react";
import type { Movie } from "../../../backend/types/types";
import { getUserMovies } from "../utils/express";
import MovieList from "../components/MovieList";
import { useNavigate } from "react-router-dom";

const RouteFavorites = () => {
	const [movies, setMovies] = useState<Movie[]>([]);
	const navigate = useNavigate();

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
			<MovieList movies={movies} navigate={navigate} />
		</div>
	);
};

export default RouteFavorites;
