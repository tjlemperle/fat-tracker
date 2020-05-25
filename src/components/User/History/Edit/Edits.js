import React, { Component } from "react";

class Edit extends Component{
    constructor(props){
        super(props)
        this.state = {
            isEditing: false,
            weightInput: '',
            dateInput: ''
        }
    }

    toggleEdit = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleChange = (e) => {
    
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div>
                {this.state.isEditing ? 
                (
                    <div>
                        <span>Weight:</span>
                        <input onChange={e => this.handleChange(e)} />
                        <span>Date:</span>
                        <input value={this.state.dateInput} onChange={e => this.handleChange(e)} />
                        <button onClick={this.props.editSubmission(this.state.weightInput(this.props.key)), this.toggleEdit}>Save</button>
                        <button onClick={this.props.deleteSubmission}>Delete</button>
                    </div>
                ):
                (
                    <div>
                        <div>
                        <span>Weight: </span>
                        <span>{this.props.submission.weight}</span>
                        </div>
                        <div>
                        <span>Date: </span>
                        <span>{this.props.submission.date}</span>
                        </div>
                        <button onClick={this.toggleEdit}>Edit</button>
                    </div>
                )}

            </div>
        )
    }
}

export default Edit