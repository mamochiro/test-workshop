import express from 'express'
import path from 'path'
import  indexRouter from './routes/index'
import cors from 'cors'

const PORT = parseInt(process.env.APP_PORT, 10) || 3000

const app = express()
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use(
  cors({
    origin: ['https://unsplash.com/','https://picsum.photos'],
    optionsSuccessStatus: 200,
  }),
)

app.listen(PORT, function() {
  console.log(`app listening on port ${PORT}!`)
})


module.exports = app
