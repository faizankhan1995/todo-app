import React, { Fragment } from 'react';

function Task(props) {
    let task;
    if(props.item.status === 'completed'){
        
        task = (
            <li key={props.item.id} > 
                <h3> 
                    <strike> {props.item.description} </strike>
                </h3>
            </li>
            )
    } else{
        task= (
            <li key={props.item.id} >
                <h3>{props.item.description}</h3>
            </li>
        )
    }

    return (
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
            {task}
            <button > - </button>
        </div>
    )
}    

export default Task;