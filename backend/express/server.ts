import express from "express";
import {
	getMovie,
	getMovies,
	getMoviesFavorites,
	getMoviesDescription,
	updateMovieFavoriteStatus,
} from "../prisma/utils";
import { stringToBoolean } from "../utils/stringToBoolean";
import type { Movie } from "../types/types";

const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(
	cors({
		origin: "*",
	})
);
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello World!");
});
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});

// Application

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

// Get all movies querying on favorites
app.get("/movies/favorites", async (req, res) => {
	const favoriteString: string | undefined = req.query.favorite?.toString();
	if (favoriteString !== undefined) {
		const favorite: boolean = stringToBoolean(favoriteString);
		const movies: Movie[] = await getMoviesFavorites(favorite);
		res.status(200).send(movies);
	}
});

// Get all movies querying on key words on description
app.get("/movies/descriptions", async (req, res) => {
	const description: string | undefined = req.query.description?.toString();
	if (description !== undefined) {
		const movies: Movie[] = await getMoviesDescription(description);
		res.status(200).send(movies);
	}
});

// Update favorite status in a particular movie
app.put("/movies/update/favorite/:id/:favorite", async (req, res) => {
	const id = req.params.id;
	const favorite: boolean = stringToBoolean(req.params.favorite);
	const updatedMovie: Movie = await updateMovieFavoriteStatus(id, favorite);
	res.status(200).send(updatedMovie);
});
