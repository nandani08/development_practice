const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/', (req, res) => {
    console.log("post request")
    res.send('Hello World post!')
  })

  app.put('/', (req, res) => {
    console.log("put request")
    res.send('Hello World put!')
  })


