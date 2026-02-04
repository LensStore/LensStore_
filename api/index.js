import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

// static
app.use(express.static(path.join(__dirname, "../public")));

// ✅ ROUTE UTAMA (INI YANG KURANG)
app.get("/", (req, res) => {
  res.render("index"); // views/index.ejs
});

// contoh admin
app.get("/admin", (req, res) => {
  res.render("admin");
});

export default app;
