import express from "express";
import {
	getMovie,
	getMovies,
	getMoviesDescription,
	addUserMovie,
	getUserMovies,
} from "../prisma/utils";
import type { Movie, User } from "../types/types";
import { verifyFirebaseToken } from "./middleware";
import { getUserLogin, getUserSignup } from "../prisma/utilsAuth";

const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(
	cors({
		origin: process.env.FRONTEND_URL,
	})
);
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello World!");
});
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});

// Authentication
// Authentication test
app.post("/authenticate", verifyFirebaseToken, (req, res) => {
	const firebaseId = req.body.firebaseId;
	res.status(200).send({ firebaseId: firebaseId });
});

// Login route
app.post("/user/login", verifyFirebaseToken, async (req, res) => {
	const { firebaseId, email } = req.body;
	const user: User = await getUserLogin(firebaseId, email);
	res.status(200).send(user);
});

// Sign up route
app.post("/user/signup", verifyFirebaseToken, async (req, res) => {
	const { firebaseId, email } = req.body;
	const user: User = await getUserSignup(firebaseId, email);
	res.status(200).send(user);
});

// Application
// Add movie to user's favorites
app.post("/movies/user/addmovie/:movieId", verifyFirebaseToken, async (req, res) => {
	const { firebaseId } = req.body;
	const movieId = req.params.movieId;
	const updatedUser: User = await addUserMovie(firebaseId, movieId);
	res.status(200).send(updatedUser);
});

// Get all of a user's movies
app.post("/movies/user", verifyFirebaseToken, async (req, res) => {
	const { firebaseId } = req.body;
	const movies: Movie[] = await getUserMovies(firebaseId);
	res.status(200).send(movies);
});

// Get single movie using id
app.get("/movies/individual/:id", async (req, res) => {
	const id = req.params.id;
	const movie: Movie = await getMovie(id);
	res.status(200).send(movie);
});

// Get all movies
app.get("/movies", async (req, res) => {
	const movies: Movie[] = await getMovies();
	res.status(200).send(movies);
});

// Get all movies querying on key words on description
app.get("/movies/descriptions", async (req, res) => {
	const description: string | undefined = req.query.description?.toString();
	if (description !== undefined) {
		const movies: Movie[] = await getMoviesDescription(description);
		res.status(200).send(movies);
	}
});
