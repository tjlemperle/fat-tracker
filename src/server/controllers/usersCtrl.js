let today = Date(Date.now())

let id = 1


const history = []

const users = []



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
        const {newWeight, newDate} = req.body

        const index = history.findIndex(element => element.id === +submission_id)

        if(index === -1){
           return res.status(404).send("No submission found")
        }

        history[index].weight = newWeight
        history[index].date = newDate

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