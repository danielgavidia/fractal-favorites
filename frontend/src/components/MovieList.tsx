import MovieCard from "./MovieCard";
import type { Movie } from "../../../backend/types/types";

interface MovieListProps {
	movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
	return (
		<div className="grid grid-cols-3">
			{movies.map((movie, index) => {
				return <MovieCard key={index} movie={movie} condensed={true} />;
			})}
		</div>
	);
};

export default MovieList;
