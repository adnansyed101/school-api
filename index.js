import express from "express";
import { getSchools, createSchool } from "./db/queries.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello From SchoolApi");
});

app.get("/listSchools", async (req, res) => {
  const { latitude, longitude } = req.query;

  try {
    const schools = await getSchools(latitude, longitude);
    res.send(schools);
  } catch (err) {
    console.log("Error in getting schools: " + err.message);
    res
      .status(500)
      .json({ success: false, message: "Error in getting schools." });
  }
});

app.post("/addSchool", async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || !latitude || !longitude) {
    return res
      .status(400)
      .send({ success: false, message: "Add all information" });
  }

  try {
    const newSchool = await createSchool(name, address, latitude, longitude);
    res.send(newSchool);
  } catch (err) {
    console.log("Error in creating schools: " + err.message);
    res
      .status(500)
      .json({ success: false, message: "Error in creating schools." });
  }
});

app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => console.log("Server running on " + PORT));
