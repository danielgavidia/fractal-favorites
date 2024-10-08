import type { Meta, StoryObj } from "@storybook/react";
import AuthForm from "../components/AuthForm";

const meta = {
	title: "AuthForm",
	component: AuthForm,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof AuthForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {
	args: {
		authOperation: "login",
	},
};

export const Signup: Story = {
	args: {
		authOperation: "signup",
	},
};
