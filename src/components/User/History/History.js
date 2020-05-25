import React from 'react'
import Edit from './Edit/Edits'

function History(props){
    return(
        <div>
            <h1>History</h1>
            
            {props.history.map(element => {
                return  <Edit 
                            key={element.id}
                            submission={element}
                            editSubmission={props.editSubmission}
                            deleteSubmission={props.deleteSubmission}
                        />

            })}

        </div>
    )
}

export default History