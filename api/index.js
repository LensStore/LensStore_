import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// fix __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// set view engine
app.set("views", path.join(process.cwd(), "views"));
app.set("view engine", "ejs");

// static file
app.use(express.static(path.join(process.cwd(), "public")));

// route utama
app.get("/", (req, res) => {
  res.render("index");
});

export default app;
