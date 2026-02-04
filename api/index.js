import express from "express"
import path from "path"
import { fileURLToPath } from "url"

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// set view engine
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "../views"))

// static file
app.use(express.static(path.join(__dirname, "../public")))

// ROUTE ROOT (INI YANG WAJIB ADA)
app.get("/", (req, res) => {
  res.render("index") // views/index.ejs
})

// ⚠️ JANGAN app.listen
export default app
