import { useNavigate } from "react-router-dom";
import type { Movie } from "../../../backend/types/types";

import { updateMovieFavoriteStatus } from "../utils/express";

interface MovieCardProps {
	movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
	const { id, title, description } = movie;
	const navigate = useNavigate();

	return (
		<button
			onClick={() => navigate(`/details/${id}`)}
			className="border-2 border-gray w-full flex flex-col text-start"
		>
			<div>{title}</div>
			<div className="text-sm">{description}</div>
			<div>
				<button onClick={() => updateMovieFavoriteStatus(id, true)}>Like</button>
			</div>
		</button>
	);
};

export default MovieCard;
