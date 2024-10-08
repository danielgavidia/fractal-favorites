import React, { useState } from "react";
import { firebaseAuth } from "../utils/expressAuth";
import { User } from "../../../backend/types/types";

interface AuthProps {
	authOperation: "login" | "signup";
}

const AuthForm = ({ authOperation }: AuthProps) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleFirebaseAuth = async (e: React.FormEvent): Promise<void> => {
		e.preventDefault();
		const res: User = await firebaseAuth(email, password, authOperation);
		console.log(`Login for email: ${res.email}`);
		setEmail("");
		setPassword("");
	};

	return (
		<div className="h-full w-full items-center flex justify-center">
			<form onSubmit={handleFirebaseAuth} className="w-96 flex flex-col mb-40">
				<input
					onChange={(e) => setEmail(e.target.value)}
					placeholder="email"
					className="border-[0.5px] border-neutral-content rounded-lg p-2 m-2 outline-none"
				/>
				<input
					onChange={(e) => setPassword(e.target.value)}
					placeholder="password"
					type="password"
					className="border-[0.5px] border-neutral-content rounded-lg p-2 m-2 outline-none"
				/>
				<button
					onClick={handleFirebaseAuth}
					className="border-[0.5px] border-neutral border-neutral-content text-base-100 p-2 m-2 rounded-lg bg-accent"
				>
					{authOperation === "login" ? "Login" : "Signup"}
				</button>
			</form>
		</div>
	);
};

export default AuthForm;
