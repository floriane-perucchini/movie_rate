import client from "../services/database.js";

const movieToSeeDatamapper = {
  createMovieToSee: async function ({
    user_id,
    movie_id
  }) {
    const sql = `INSERT INTO "movie_to_see" (user_id, movie_id) VALUES ($1, $2) RETURNING *`;
    const result = await client.query(sql, [user_id, movie_id]);
    return result.rows[0];
  },
  deleteMovieToSee: async function ({
    user_id,
    movie_id
  }) {
    const sql = `DELETE FROM "movie_to_see" WHERE user_id = $1 AND movie_id = $2`;
    await client.query(sql, [user_id, movie_id]);
    return {message: "movie deleted"};
  }
};

export default movieToSeeDatamapper;