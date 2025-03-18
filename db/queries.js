import pool from "./database.js";

async function getSchools(latitude, longitude) {
  const [result] = await pool.query(
    "SELECT * FROM schools ORDER BY (POW((longitude - ? ),2) + POW((latitude - ? ),2))",
    [longitude, latitude]
  );

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
