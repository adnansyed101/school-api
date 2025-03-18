import express from "express";
import { getSchools, createSchool } from "./db/queries.js";

const app = express();
const PORT = process.env.PORT || 5000;

console.log(process.env.PORT);

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello From SchoolApi");
});

app.get("/listSchools", async (_req, res) => {
  const schools = await getSchools();
  console.log(schools);

  res.send(schools);
});

app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => console.log("Server running on " + PORT));
