
const express = require('express')
const cors = require('cors')
const app = express()
const AppRouter = require('./routes/AppRouter')
const bodyParser = require('body-parser')


const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
/// Controllers

// Routes Go Here
app.get('/', (req, res) => res.json({ message: 'Server Works' }))

app.use('/', AppRouter)

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))