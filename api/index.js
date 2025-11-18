// api/number.js
import fs from "fs";
const FILE = "./click.json";

export default function handler(req, res) {
  if (!fs.existsSync(FILE)) {
    fs.writeFileSync(FILE, JSON.stringify({ click: 0 }));
  }

  const data = JSON.parse(fs.readFileSync(FILE, "utf-8"));

  if (req.method === "POST") {
    data.click += 1;
    fs.writeFileSync(FILE, JSON.stringify(data));
  }

  res.status(200).json(data);
}
