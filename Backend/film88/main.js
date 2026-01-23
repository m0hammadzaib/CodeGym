const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send('Hello World22 Zaib!')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/info', (req, res) => {
  res.send('Information')
})
app.get('/users/:username',(req,res)=>{
  res.send(`This is ${req.params.username} here.....`)
  console.log(req.params); //will output parameters 
  console.log(req.query); //will output query
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


