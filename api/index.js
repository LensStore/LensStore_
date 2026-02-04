import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// setting view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

// static file
app.use("/public", express.static(path.join(__dirname, "../public")));

// route utama
app.get("/", (req, res) => {
  res.render("index");
});

// ⛔ JANGAN app.listen()
// ✅ EXPORT app
export default app;
