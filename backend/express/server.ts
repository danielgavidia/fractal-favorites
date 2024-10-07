import express from "express";
import { getMovies, getMoviesFavorites, getMoviesDescription } from "../prisma/utils";
import { stringToBoolean } from "../utils/stringToBoolean";
import type { Movie } from "../types/types";

const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello World!");
});
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});

// Application

// Get all movies
app.get("/movies", async (req, res) => {
	try {
		const movies: Movie[] = await getMovies();
		res.status(200).send(movies);
	} catch (e) {
		res.status(400).send(e);
	}
});

// Get all movies querying on favorites
app.get("/movies/favorites", async (req, res) => {
	try {
		const favoriteString: string | undefined = req.query.favorite?.toString();
		if (favoriteString !== undefined) {
			const favorite: boolean = stringToBoolean(favoriteString);
			const movies: Movie[] = await getMoviesFavorites(favorite);
			res.status(200).send(movies);
		}
	} catch (e) {
		res.status(400).send(e);
	}
});

// Get all movies querying on key words on description
app.get("/movies/description", async (req, res) => {
	try {
		const description: string | undefined = req.query.description?.toString();
		console.log(description);
		if (description !== undefined) {
			const movies: Movie[] = await getMoviesDescription(description);
			res.status(200).send(movies);
		}
	} catch (e) {
		res.status(400).send(e);
	}
});
