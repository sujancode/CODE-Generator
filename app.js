import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import makeExpressCallback from './express-callback'

import {postSchemaController} from './controller/'

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(bodyParser.json())

app.get("/",(req,res)=>{
    console.log("Working")
})
// Routes Config
app.post("/generate/", makeExpressCallback(postSchemaController))



app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`)
})

export default app