import pool from "./database.js";

async function getSchools() {
  const [result] = await pool.query("SELECT * FROM schools");

  return result;
}

console.log(result);
