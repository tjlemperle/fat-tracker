import React, { Component } from "react";

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
            <div>
                {this.state.isEditing ? 
                (
                    <div>
                        <span>Weight:</span>
                        <input name='weightInput' placeholder={this.props.submission.weight} onChange={e => this.handleChange(e)} />
                        <span>Date:</span>
                        <input type="date" id="start" name="dateInput" defaultValue={this.props.submission.date}  onChange={e => this.handleChange(e)} min="2020-01-01" max="2021-12-31" />
                        <button onClick={() => {this.props.editSubmission(this.props.submission.id, this.state.dateInput, this.state.weightInput); this.toggleEdit()}}>Save</button>
                        <button onClick={() => this.props.deleteSubmission(this.props.submission.id)}>Delete</button>
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