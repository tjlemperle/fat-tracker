import React, {Component} from 'react'

class User extends Component{
    constructor(props){
        super(props)
        this.state ={
            
        }
    }

    render(){
        let currentIndex = this.props.history.length-1
        let difference = this.props.user[0].weight - this.props.history[currentIndex].weight
        let absDifference = Math.abs(difference)
        return(
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/John_Stockton_1988-89.jpg/220px-John_Stockton_1988-89.jpg' alt='Greatest player' />
                <section>
                    <span>Initial: </span>
                    <span>{this.props.user[0].weight}</span>
                </section>
                <section>
                    <span>Current: </span>
                    <span>{this.props.history[currentIndex].weight} </span>
                </section>
                <section>
                    <span>Difference: </span>
                    <span>{difference <= 0 ? `+${absDifference}` : `-${difference}`}</span>
                </section>
            </div>
        )
    }
}

export default User