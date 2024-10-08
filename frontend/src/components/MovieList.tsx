import { useState } from "react";

import MovieCard from "./MovieCard";
import type { Movie } from "../../../backend/types/types";
import { NavigateFunction } from "react-router-dom";

interface MovieListProps {
	movies: Movie[];
	navigate: NavigateFunction;
}

const MovieList = ({ movies, navigate }: MovieListProps) => {
	const [currentPage, setCurrentPage] = useState(0);
	const moviesPerPage = 6;

	// Calculate total pages
	const totalPages = Math.ceil(movies.length / moviesPerPage);

	// Get movies for the current page
	const getMoviesForPage = (page: number) => {
		const start = page * moviesPerPage;
		const end = start + moviesPerPage;
		return movies.slice(start, end);
	};
	return (
		<div className="flex flex-col h-full">
			{/* Display the current chunk of movies */}
			<div className="grid grid-cols-3">
				{getMoviesForPage(currentPage).map((movie, index) => {
					if (index < 6) {
						return (
							<MovieCard
								key={index}
								movie={movie}
								condensed={true}
								navigate={navigate}
							/>
						);
					}
				})}
			</div>
			{/* Pagination buttons */}
			{Array.from({ length: totalPages }).map((_, index) => (
				<button key={index} onClick={() => setCurrentPage(index)}>
					{index + 1}
				</button>
			))}
		</div>
	);
};

export default MovieList;
