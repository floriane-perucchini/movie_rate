import express from "express";
import movieToSeeController from "../controller/movieToSeeController.js";

const router = express.Router();

router.get("/movies/discover", movieToSeeController.getDiscoverMovies);
router.get("/movies/movie/:id", movieToSeeController.getMovieById);

router.post("/movies/movie/add", movieToSeeController.addMovieToSee);

router.delete("/movies/movie/delete", movieToSeeController.deleteMovieToSee)

export default router;