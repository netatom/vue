const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

const dummyUser = {
    username: 'user1',
    password: '1234'
}

app.post('/api/login', (req, res) => {
    const { username, password } = req.body

    if (username === dummyUser.username && password === dummyUser.password) {
        res.json({ success: true, username })
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' })
    }
})

app.listen(PORT, () => {
    console.log('Server is running')
})