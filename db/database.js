import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "Area90448",
    database: "schoolapi",
  })
  .promise();

export default pool;
