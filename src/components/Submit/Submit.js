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
                <section className="positioning">
                    <h1>Weight   </h1>
                    <input className='input' className='weightInput' name="weightInput" onChange={e => this.handleChange(e)} />
                </section>
                <section className='positioning'>
                    <h1>Date   </h1>
                    <input className='input' type="date" id="start" name="dateInput"   onChange={e => this.handleChange(e)} min="2020-01-01" max="2021-12-31" />
                </section>
                <button className='button'  onClick={() => this.props.addSubmission(this.state.dateInput, this.state.weightInput)}>Submit</button>
            
            </div>
        )
    }
}

export default Submit