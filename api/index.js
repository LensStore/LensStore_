import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// view engine
app.set('view engine', 'ejs')
app.set('views', path.join(process.cwd(), 'views'))

// static files
app.use('/public', express.static(path.join(process.cwd(), 'public')))

// route utama
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Lens Store'
  })
})

// IMPORTANT: JANGAN app.listen()
export default app
