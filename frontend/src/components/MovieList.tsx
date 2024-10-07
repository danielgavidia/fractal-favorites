import type { Movie } from "../../../backend/types/types";

interface MovieListProps {
	movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
	return (
		<div>
			{movies.map((movie) => {
				return <div>{movie.title}</div>;
			})}
		</div>
	);
};

export default MovieList;
