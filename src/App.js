import React, {Component} from 'react';
import Header from './components/Header/Header'
import User from './components/User/User'
import Submit from './components/Submit/Submit';
import History from './components/User/History/History'

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  componentDidMount(){}

  render(){

    return (
      <div className="App">
        <Header />
        <div>
          <User />
          <Submit />
        </div>
        <History />
        
    </div>
  );
}
}

export default App;
