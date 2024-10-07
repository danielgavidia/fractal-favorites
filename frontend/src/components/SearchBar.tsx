import { useState } from "react";

interface SearchBarProps {
	handleSearchMovies: (description: string) => void;
}

const SearchBar = ({ handleSearchMovies }: SearchBarProps) => {
	const [search, setSearch] = useState<string>("");
	const handleFormSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setSearch("");
		handleSearchMovies(search);
	};

	return (
		<div>
			<form onSubmit={handleFormSubmit} className="flex">
				<input
					onChange={(e) => setSearch(e.target.value)}
					value={search}
					placeholder="Search movies"
					className="w-full bg-red-100"
				/>
				<button onClick={handleFormSubmit} className="bg-blue-100">
					Submit
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
