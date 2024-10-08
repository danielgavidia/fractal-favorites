import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import MovieCard from "../components/MovieCard";
import { Movie } from "../../../backend/types/types";

const meta = {
	title: "MovieCard",
	component: MovieCard,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof MovieCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockMovie: Movie = {
	id: "",
	createdAt: new Date(),
	updatedAt: new Date(),
	favorite: false,
	title: "Example Movie",
	description: "This is an example description for the movie.",
	imageUrl:
		"https://m.media-amazon.com/images/M/MV5BNGIyYWMzNjktNDE3MC00YWQyLWEyMmEtN2ZmNzZhZDk3NGJlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
};

const mockNavigate = action("navigate");

export const Primary: Story = {
	args: {
		movie: mockMovie,
		condensed: false,
		navigate: mockNavigate,
	},
};
