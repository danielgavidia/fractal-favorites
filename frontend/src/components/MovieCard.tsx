import type { Movie } from "../../../backend/types/types";
import { addUserMovie } from "../utils/express";
import { NavigateFunction } from "react-router-dom";
import { icons } from "../utils/icons";

interface MovieCardProps {
	movie: Movie;
	condensed: boolean;
	navigate: NavigateFunction;
}

function shortenString(str: string, maxLength: number) {
	const slicedTitle = str.slice(0, maxLength);
	if (str.length > maxLength) {
		return `${slicedTitle}...`;
	} else {
		return slicedTitle;
	}
}

const MovieCard = ({ movie, condensed, navigate }: MovieCardProps) => {
	const { id, title, description, imageUrl } = movie;

	return (
		<>
			{condensed ? (
				<div className="bg-base-100 flex flex-col m-2 shadow-xl border-[0.5px] rounded-lg p-2 h-full">
					<button
						onClick={() => navigate(`/details/${id}`)}
						className="w-full flex flex-col text-start flex-1 items-center"
					>
						<div className="text-sm font-bold h-12">
							<p className="text-start">{shortenString(title, 36)}</p>
						</div>
						<img src={imageUrl} className="object-contain p-1 m-1 h-full" />
					</button>
					<button onClick={() => addUserMovie(id)} className="text-neutral p-2">
						<icons.like color="inherit" />
					</button>
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
