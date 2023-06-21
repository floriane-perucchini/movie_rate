import movieToSeeDatamapper from "../datamapper/movieToSeeDatamapper.js";
import movieInstance from "../services/moviebase.js"

const movieToSeeController = {
  getDiscoverMovies: async function (request, response){
    try{
      const movies = await movieInstance.get("/movies/discover?type=popular");
      return response.status(200).json(movies.data);
    } catch(error){
      console.log(error);
      return response.status(500).json(error.message);
    }
  },
  getMovieById: async function (request, response){
    const movieID = request.params.id;
    try{
      const movie = await movieInstance.get(`/movies/movie?id=${movieID}`);
      return response.status(200).json(movie.data);
    } catch(error){
      console.log(error);
      return response.status(500).json(error.message);
    }
  },
  addMovieToSee: async function (request, response){
    const {user_id, movie_id} = request.body;
    try{
      const movie = await movieToSeeDatamapper.createMovieToSee({user_id, movie_id});
      return response.status(200).json(movie);
    } catch(error){
      console.log(error);
      return response.status(500).json(error.message);
    }
  },
  deleteMovieToSee: async function (request, response){
    const {user_id, movie_id} = request.body;
    try{
      const movie = await movieToSeeDatamapper.deleteMovieToSee({user_id, movie_id});
      return response.status(200).json(movie);
    } catch(error){
      console.log(error);
      return response.status(500).json(error.message);
    }
  }

}

export default movieToSeeController;