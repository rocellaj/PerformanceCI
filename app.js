const express = require('express')
const db = require('./routes/queries')
const bodyParser = require('body-parser')
const app = express()
const port = 3001
const host = '127.0.0.1'

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', (request, response) => {
    response.json({ info: 'This is a sample application' })
  })

app.get('/users', db.getUsers)
app.get('/expense', db.getExpense)
app.post('/expense', db.createExpense)

// app.listen(port, () => {
//     console.log(`App running on port ${port}.`)
//   })

app.listen(port, host, () => { 
  console.log(`App running on ${host}:${port}.`)
})