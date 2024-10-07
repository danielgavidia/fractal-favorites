import MovieCard from "./MovieCard";
import type { Movie } from "../../../backend/types/types";

interface MovieListProps {
	movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
	return (
		<div>
			{movies.map((movie, index) => {
				return <MovieCard key={index} movie={movie} />;
			})}
		</div>
	);
};

export default MovieList;
