import express from 'express'
import boardGamesRoutes from '../routes/boardgames.routes'
import favoritesRoutes from '../routes/favorites.routes'

const app = express();

//middlewares
app.use(express.json())

app.get('/', (req,res)=> {
    res.json('welcome')
})

//routes
app.use('/boardgame', boardGamesRoutes)
app.use('/favorites', favoritesRoutes)

export default app