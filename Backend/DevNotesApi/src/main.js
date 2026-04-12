require('dotenv').config()
const express = require('express')
const prisma = require('./db')

const app = express()
app.use(express.json())

app.get('/', (req, res) => res.send('Server chal raha hai bhai'))
app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany()
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' })
  }
})
app.post('/users', async (req, res) => {
  try {
    const { email, name } = req.body
    const user = await prisma.user.create({ data: { email, name } })
    res.status(201).json(user)
  } catch (error) {
    res.status(500).json({ message: 'Error creating user' })
  }
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})