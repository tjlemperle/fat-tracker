import React, { Component } from "react";
import '../Edit/Edit.css'

class Edit extends Component{
    constructor(props){
        super(props)
        this.state = {
            isEditing: false,
            weightInput: '',
            dateInput: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    toggleEdit = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleChange(e){   
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    

    render(){
 
        return(
            <div className='submission-container'>
                

                {this.state.isEditing ? 
                (
                    <div className='submission-area'>
                        <div className='divvy'>
                            <span>Date</span>
                            <input className='input' type="date" id="start" name="dateInput" defaultValue={this.props.submission.date}  onChange={e => this.handleChange(e)} min="2020-01-01" max="2021-12-31" />
                        </div>
                        <div className='divvy'>
                            <span>Weight</span>
                            <input className='input' name='weightInput' placeholder={this.props.submission.weight} onChange={e => this.handleChange(e)} />
                        </div>
                        <div>
                            <button className='button' id='save' onClick={() => {this.props.editSubmission(this.props.submission.id, this.state.dateInput, this.state.weightInput); this.toggleEdit()}}>Save</button>
                            <button className='button' onClick={() => this.props.deleteSubmission(this.props.submission.id)}>Delete</button>
                        </div>
                    </div>
                ):
                (
                    <div className='submission-area'>
                        <div className='divvy'>
                            <span>Date</span>
                            <span className='number2'>{this.props.submission.date}</span>
                        </div>
                        <div className='divvy'>
                            <span>Weight</span>
                            <span className='number2'>{this.props.submission.weight}</span>
                        </div>

                        <button id='edit' className='button' onClick={this.toggleEdit}>Edit</button>
                    </div>
                )}
                

            </div>
        )
    }
}

export default Edit