import express from 'express'

const app = express()
const router = express.Router()
const port = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

router.post('/DevOps', (req, res) => {
  const { from } = req.body
  res.status(200).send({
    message: `Hello ${from}, you messsage will be sent.`
  })
})

router.all('/DevOps', (req, res) => {
  res.status(400).send('ERROR')
})

app.use('/', router)

app.listen(port, (_) => {
  console.log(`Express server running on port ${port}`)
})

app.on('error', (err) => console.log(err))