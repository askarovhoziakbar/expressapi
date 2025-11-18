import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());
app.listen(3000, () => {});

const FILE = "click.json";

app.get("/number", (req, res) => {
  const data = JSON.parse(fs.readFileSync(FILE, "utf-8"));
  res.json(data);
});

app.post("/number/increment", (req, res) => {
  const data = JSON.parse(fs.readFileSync(FILE, "utf-8"));
  data.click += 1;
  fs.writeFileSync(FILE, JSON.stringify(data));
  res.json(data);
});
