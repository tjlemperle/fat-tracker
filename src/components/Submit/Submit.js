import React, { Component } from "react";
import './Submit.css'

class Submit extends Component{
    constructor(){
        super()
        this.state ={
            weightInput: '',
            dateInput: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div className='submit-container'>
                <section>
                    <span>Weight: </span>
                    <input name="weightInput" onChange={e => this.handleChange(e)} />
                </section>
                <section>
                    <span>Date:</span>
                    <input type="date" id="start" name="dateInput"   onChange={e => this.handleChange(e)} min="2020-01-01" max="2021-12-31" />
                </section>
                <button onClick={() => this.props.addSubmission(this.state.dateInput, this.state.weightInput)}>Submit</button>
            
            </div>
        )
    }
}

export default Submit