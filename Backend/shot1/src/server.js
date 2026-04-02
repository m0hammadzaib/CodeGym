import express from 'express'
import {config} from 'dotenv'
import { connectDB, disconnectDB } from './config/db.js'

const app = express()
const port = 3000

config();
connectDB();

// Import routes 
import movieRoutes from './routes/movieRoutes.js';

// Api routes

app.use('/movies', movieRoutes)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello', (req,res)=>{
      res.json({message:"Hello world"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

process.on("unhandledRejection",(err)=>{
  console.error("Unhaldled Rejection"+ err)
  server.close(async ()=>{
    await disconnectDB();
    process.exit(1)
  })
})

process.on("uncaughtException",(err)=>{
  console.error("Uncaught Exception"+ err)
  server.close(async ()=>{
    await disconnectDB();
    process.exit(1)
  })
})
process.on("unhandledRejection", async (err)=>{
  console.error("Unhaldled Rejection"+ err)
    await disconnectDB();
    process.exit(1)
})
