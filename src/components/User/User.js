import React, {Component} from 'react'
import '../User/User.css'

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
            <div className='user-container'>
                <div className="img-container">                   
                    <img className='user-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/John_Stockton_1988-89.jpg/220px-John_Stockton_1988-89.jpg' alt='Greatest player' />
                    <span>{this.props.user[0].name}</span>
                </div>
                <div className='numbers-container'>
                    <section className='initial-container'>
                        <span className='title'>Initial: </span>
                        <span className='number'>{this.props.user[0].weight}</span>
                    </section>
                    <section className='current-container'>
                        <span className='title'>Current: </span>
                        <span className='number'>{this.props.history[currentIndex].weight} </span>
                    </section>
                    <section className='difference-container'>
                        <span className='title'>Difference: </span>
                        <span className='number' className='difference'>{difference <= 0 ? `+${absDifference}` : `-${absDifference}`}</span>
                    </section>
                </div>    

            </div>
        )
    }
}

export default User