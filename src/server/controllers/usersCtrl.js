let today = Date(Date.now())

let id = 1


const history = [{
    id: 0,
    date: today,
    weight: 250
}]

const users = [{
    user_id: 0,
    name: 'Travis',
    initial: history[0].weight,
    current: history[history.length - 1].weight,
    goal: 210,
}]



module.exports = {
    
    getUsers: (req, res) => {
        res.status(200).send(users)
    },

    userHistory: (req, res) => {
        res.status(200).send(history)
    },

    submitWeight: (req, res) => {
        const {date, weight} = req.body
        
        const submission = {id, date, weight}

        history.push(submission)

        id++

        res.status(200).send(history)

    },

    editSubmission: (req, res) => {
        const {submission_id} = req.params
        const {newWeight} = req.body

        const index = history.findIndex(element => element.id === +submission_id)

        if(index === -1){
           return res.status(404).send("No submission found")
        }

        history[index].weight = newWeight

        res.status(200).send(history)        
    },

    deleteSubmission: (req,res) => {
        const {submission_id} = req.params

        const index = history.findIndex(element => element.id === +submission_id)

        if(index === -1){
            return res.status(404).send("No submission found")
        }

        history.splice(index, 1)

        res.status(200).send(history)
    }
}