import React from 'react'
import Edit from './Edit/Edits'
import '../History/History.css'

function History(props){
    return(
        <div className='history-container'>
            <div>
            <h1 className='title2'>History</h1>
            
            
            {props.history.map(element => {
                return  <Edit 
                key={element.id}
                submission={element}
                editSubmission={props.editSubmission}
                deleteSubmission={props.deleteSubmission}
                />
                
            })}
            </div>

        </div>
    )
}

export default History