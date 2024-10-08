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
			<form onSubmit={handleFormSubmit} className="flex p-2">
				<input
					onChange={(e) => setSearch(e.target.value)}
					value={search}
					placeholder="Search movies"
					className="w-full bg-base-100 p-2 border-[0.5px] border-neutral-content rounded-lg outline-none"
				/>
				<button
					onClick={handleFormSubmit}
					className="bg-blue-100 ml-2 bg-accent text-base-100 text-sm rounded-lg p-2"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
