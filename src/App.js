import React, {Component} from 'react';
import Header from './components/Header/Header'
import User from './components/User/User'
import Submit from './components/Submit/Submit';
import History from './components/User/History/History'
import axios from 'axios'

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      users: [{
        name: 'John Stockton',
        weight: 250,
        goal: 210
      }],

      history: [    {
        id: 0,
        date: '2020-05-24',
        weight: 250
      }]

    }

    this.addSubmission = this.addSubmission.bind(this)
    this.editSubmission = this.editSubmission.bind(this)
    this.deleteSubmission = this.deleteSubmission.bind(this)
  }

  componentDidMount(){
    axios.get('http://localhost:3001/api/users')
      .then(res =>{
      console.log("this is working here")         
      this.setState({           
        users: res.data})     
      })

    axios.get('http://localhost:3001/api/history')
      .then(res => {
        this.setState({
          history: res.data
        })
      })

  }
  
  addSubmission(submission){
    axios.post(`http://localhost:3001/api/history`, {submission})
      .then(res => {
        this.setState({
          history: res.data
        })
      })
  }

  editSubmission(id, newDate, newWeight){
    axios.put(`http://localhost:3001/api/history/${id}`, {date: newDate, weight: newWeight})
      .then(res => {
        this.setState({
          history: res.data
        })
      })
  }

  deleteSubmission(id){
    axios.delete(`http://localhost:3001/api/history/${id}`)
      .then(res => {
        this.setState({
          history:res.data
        })
      })
  }

  render(){

    return (
      <div className="App">
        <Header />
        <div>
          <User 
          history={this.state.history}
          user={this.state.users} 
          />
          
          <Submit addSubmission={this.addSubmission} />
        </div>
        <History 
          history={this.state.history} 
          editSubmission={this.editSubmission}
          deleteSubmission={this.deleteSubmission}  
          />

    </div>
  );
}
}

export default App;
