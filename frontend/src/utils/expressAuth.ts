import axios from "axios";
import type { User } from "../../../backend/types/types";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	UserCredential,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export const firebaseAuth = async (
	email: string,
	password: string,
	authOperation: "login" | "signup"
): Promise<User> => {
	if (authOperation === "login") {
		const userCredential: UserCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password
		);
		const idToken: string = await userCredential.user.getIdToken();
		const res: User = await axios({
			method: "POST",
			url: `${import.meta.env.BASE_URL}/user/login`,
			headers: {
				Authorization: `Bearer ${idToken}`,
			},
		});
		return res;
	} else {
		const userCredential: UserCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		const idToken: string = await userCredential.user.getIdToken();
		const res: User = await axios({
			method: "POST",
			url: `${import.meta.env.BASE_URL}/user/signup`,
			headers: {
				Authorization: `Bearer ${idToken}`,
			},
		});
		return res;
	}
};
