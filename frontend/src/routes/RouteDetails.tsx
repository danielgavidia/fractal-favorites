import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovie } from "../utils/express";
import type { Movie } from "../../../backend/types/types";

import MovieCard from "../components/MovieCard";

const RouteDetails = () => {
	const [movie, setMovie] = useState<Movie>();
	const { movieId } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const fetch = async () => {
			if (movieId !== undefined) {
				const res: Movie = await getMovie(movieId);
				setMovie(res);
			}
		};
		fetch();
	}, []);
	return (
		<div className="p-4 w-full h-full">
			{movie === undefined ? (
				<div>Loading</div>
			) : (
				<MovieCard movie={movie} condensed={false} navigate={navigate} />
			)}
		</div>
	);
};

export default RouteDetails;
