const express = require('express')
const usersCtrl = require('./controllers/usersCtrl')
const app = express()

app.use(express.json())

const SERVER_PORT = 3001

app.get('/api/users', usersCtrl.getUsers)
app.get('/api/history', usersCtrl.userHistory)
app.post('/api/history', usersCtrl.submitWeight)
app.put('/api/history/:submission_id', usersCtrl.editSubmission)
app.delete('/api/history/:submission_id', usersCtrl.deleteSubmission)


app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))