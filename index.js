const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
var cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const productRoutes = require('./src/routes/products.js')

const app = express()

app.use(cors({
  origin: 'https://e-commerce-app-sage.vercel.app'
}));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(productRoutes)

app.get('/', (req, res) => {
  res.send({
    status: 'Server is up :)',
    now: new Date(),
    name: "e commerce server"
  })
})

// const PORT = process.env.PORT || 4000;

app.listen(process.env.PORT,'0.0.0.0', () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('Server is running :)'))
    .catch((error) => console.log(error))
})