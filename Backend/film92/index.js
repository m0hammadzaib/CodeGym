const express = require('express')
const app = express()
const port = 3000

app.set("views", "ejs"); 

app.get('/',(req,res)=>{
    let siteName = "BootStrap"
    let searchText = "SearchNow"
      res.render("index",{siteName:siteName,searchText:searchText})
})
app.get('/blog/:slug',(req,res)=>{
     let blogTital = "BootStrap why and when?"
    let blogContent = "Its a good Framwork"
      res.render("blogpost",{blogTital:blogTital, blogContent: blogContent})
  
})

app.listen(port,()=>{
console.log(`Express app listening on port ${port}`)
})