const express = require('express')
const chefData = require("./data/data.json")
const cors = require("cors")

const app = express()
const port = 5000

app.use(cors());
app.get('/chefInfo/:id' , (req, res) => {
  const id = req.params.id;
  const selectedData = chefData.find(d => d.id == id); 
  res.send(selectedData)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/data', (req, res) => {
  res.send(chefData)
})


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})