import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../utils/express";
import type { Movie } from "../../../backend/types/types";

import MovieCard from "../components/MovieCard";

const RouteDetails = () => {
	const [movie, setMovie] = useState<Movie>();
	const { movieId } = useParams();

	useEffect(() => {
		const fetch = async () => {
			if (movieId !== undefined) {
				const res: Movie = await getMovie(movieId);
				setMovie(res);
			}
		};
		fetch();
	}, []);
	return <div>{movie === undefined ? <div>Loading</div> : <MovieCard movie={movie} />}</div>;
};

export default RouteDetails;
