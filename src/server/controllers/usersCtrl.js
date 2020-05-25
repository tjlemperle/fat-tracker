let id = 1


const history = [        
    {
    id: 0,
    date: '2020-05-24',
    weight: 2500
  },
  {
    id: 1,
    date: '2020-05-24',
    weight: 250
  },
]

const users = [{
    name: 'Jacob',
    weight: 250,
    goal: 210
  }]



module.exports = {
    
    getUsers: (req, res) => {
        console.log('hi')
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
        // console.log(submission_id)
        const {date, weight} = req.body

        const index = history.findIndex(element => element.id === +submission_id)

        if(index === -1){
           return res.status(404).send("No submission found")
        }

        const updatedSubmission = {
            id: +submission_id,
            date: date || history[index].date,
            weight: weight || history[index].weight
        }

        history[index] = updatedSubmission

        // console.log(history)
        
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