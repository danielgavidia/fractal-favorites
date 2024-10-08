import { useNavigate } from "react-router-dom";
import type { Movie } from "../../../backend/types/types";
import { addUserMovie } from "../utils/express";

interface MovieCardProps {
	movie: Movie;
	condensed: boolean;
}

const MovieCard = ({ movie, condensed }: MovieCardProps) => {
	const { id, title, description, imageUrl } = movie;
	const navigate = useNavigate();

	return (
		<>
			{condensed ? (
				<div className="h-94 flex flex-col m-2 border-[0.5px] border-gray rounded-lg">
					<button
						onClick={() => navigate(`/details/${id}`)}
						className="w-full flex flex-col text-start flex-1"
					>
						<div className="text-sm font-bold h-20 p-2">
							<p className="text-start h-full">{title}</p>
						</div>
						{/* <div className="text-xs">{description}</div> */}
						<img src={imageUrl} className="object-contain p-1" />
					</button>
					<button onClick={() => addUserMovie(id)}>Like</button>
				</div>
			) : (
				<div className="h-full flex flex-col m-2 border-[0.5px] border-gray rounded-lg p-2">
					<div className="text-lg font-bold h-16 p-1 text-center">{title}</div>
					<img src={imageUrl} className="object-contain p-1 h-80" />
					<div className="h-20 p-2">{description}</div>
				</div>
			)}
		</>
	);
};

export default MovieCard;
