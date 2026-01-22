const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.send('Hello Zaib Bruhh Yeah home!')
  console.log("Hey its get request")
})

app.post('/', (req, res) => {
  res.send('Hello Zaib Bruhh Yeah Post!')
   console.log("Hey its post request")
})
app.get('/index', (req, res) => {
  console.log("Hey its Index")
  res.sendFile('templates/index.html',{root:__dirname})
})
app.get('/api',(req,res)=>{
  res.json({a:1,b:2,c:3,d:4})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
