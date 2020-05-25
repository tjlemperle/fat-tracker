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
                        <input name='weightInput' onChange={e => this.handleChange(e)} />
                        <span>Date:</span>
                        <input type="date" id="start" name="dateInput" value={this.state.dateInput}  onChange={e => this.handleChange(e)} min="2020-01-01" max="2021-12-31" />
                        <button onClick={this.props.editSubmission(this.props.submission.id, this.dateInput, this.weightInput)}>Save</button>
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