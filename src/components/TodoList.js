import React from 'react';
import Task from './Task';

function TodoList(props) {
    
  return (
        <ul key="task-list">
            {
              props.todoItems.map( (item,index) =>  
                
                  <Task item={item} changeItemStatus={props.changeItemStatus} />
               )
            }
        </ul>
  );
}

export default TodoList;
