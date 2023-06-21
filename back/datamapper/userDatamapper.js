import client from "../services/database.js";

const userDatamapper = {

  getAll: async function (){
    const sql = `SELECT * FROM "user"`;
    const results = await client.query(sql);
    return results.rows;
  },

  getOne: async function (email){
    const sql = `SELECT * FROM "user" WHERE email = $1`;
    const result = await client.query(sql, [email]);
    return result.rows[0];
  },

  create: async function ({
    email,
    password
  }) {
    const sql = `INSERT INTO "user" (email, password) VALUES ($1, $2) RETURNING *`;
    const result = await client.query(sql, [email, password]);
    return result.rows[0];
  },

  updateUserToken: async function (email, token) {
    const sql = `UPDATE "user" SET token = $1 WHERE email = $2 RETURNING *`;
    const result = await client.query(sql, [token, email]);
    return result.rows[0];
  },
};

export default userDatamapper;