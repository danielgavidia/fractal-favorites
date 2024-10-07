import type { Movie } from "../../../backend/types/types";

interface MovieCardProps {
	movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
	const { title, description, imageUrl } = movie;

	return (
		<div>
			<div>{title}</div>
			<div>{description}</div>
			<div>
				<img src={imageUrl} />
			</div>
		</div>
	);
};

export default MovieCard;
