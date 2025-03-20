const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

//app.get or app.post or app.put  pr app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World!4')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//http has limited packages 
//custom codes in http
//express is made for websites 

app.get('/blog/:slug',(req, res)=>{
    
    res.send('hello ${req,params.slug}')
})