import pool from "./database.js";

async function getSchools() {
  const [result] = await pool.query("SELECT * FROM schools");

  return result;
}

async function createSchool(name, address, latitude, longitude) {
  const result = await pool.query(
    `
        INSERT INTO schools (name, address, latitude, longitude) VALUES (?,?,?,?)
        `,
    [name, address, latitude, longitude]
  );

  return result;
}

export { getSchools, createSchool };
