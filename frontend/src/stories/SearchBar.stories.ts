import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SearchBar from "../components/SearchBar";

const meta = {
	title: "SearchBar",
	component: SearchBar,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockHandleSearchMovies = action("search");

export const Primary: Story = {
	args: {
		handleSearchMovies: mockHandleSearchMovies,
	},
};
