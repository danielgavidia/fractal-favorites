import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Movie } from "../../../backend/types/types";
import MovieList from "../components/MovieList";

const meta = {
	title: "MovieList",
	component: MovieList,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof MovieList>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockMovies: Movie[] = [
	{
		id: "",
		createdAt: new Date(),
		updatedAt: new Date(),
		favorite: false,
		title: "Example Movie",
		description: "This is an example description for the movie.",
		imageUrl:
			"https://m.media-amazon.com/images/M/MV5BNGIyYWMzNjktNDE3MC00YWQyLWEyMmEtN2ZmNzZhZDk3NGJlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
	},
	{
		id: "",
		createdAt: new Date(),
		updatedAt: new Date(),
		favorite: false,
		title: "Example Movie",
		description: "This is an example description for the movie.",
		imageUrl:
			"https://m.media-amazon.com/images/M/MV5BNGIyYWMzNjktNDE3MC00YWQyLWEyMmEtN2ZmNzZhZDk3NGJlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
	},
	{
		id: "",
		createdAt: new Date(),
		updatedAt: new Date(),
		favorite: false,
		title: "Example Movie",
		description: "This is an example description for the movie.",
		imageUrl:
			"https://m.media-amazon.com/images/M/MV5BNGIyYWMzNjktNDE3MC00YWQyLWEyMmEtN2ZmNzZhZDk3NGJlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
	},
];

const mockNavigate = action("navigate");

export const Primary: Story = {
	args: {
		movies: mockMovies,
		navigate: mockNavigate,
	},
};
