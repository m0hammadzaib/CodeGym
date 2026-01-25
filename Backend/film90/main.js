const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.use((req,res,next)=>{
  console.log("Logged In");
  next()
})

app.get('/', (req, res) => {
  res.send('Hello Express World!')
})
app.get('/about', (req, res) => {
  res.send('Hello About!')
})
app.get('/contact', (req, res) => {
  res.send('Hello Contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
