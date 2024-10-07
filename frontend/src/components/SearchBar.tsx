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
					className="w-full bg-primary-content p-2 border-[0.5px] border-neutral-content rounded-lg"
				/>
				<button
					onClick={handleFormSubmit}
					className="bg-blue-100 ml-2 bg-primary-content text-neutral-content border-[0.5px] border-neutral-content rounded-lg p-2"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
