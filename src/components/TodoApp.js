import React, { useState } from 'react';
import Summary from './Summary';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const intialState = [
    {
        id:'1',
        description:'first',
        status: 'pending'
    },
    {
        id:'2',
        description:'second',
        status: 'pending'
    },
    {
        id:'3',
        description:'third',
        status: 'completed'
    },
    {
        id:'4',
        description:'fourth',
        status: 'completed'
    },

]
function TodoApp() {
    const [items, setItems] = useState(intialState);

    function addTodoItem(item){
        item.id = `${items.length+1}` ;
        // return;
        setItems(
            [...items, item]
        );
    }
    function removeTodoItem(item){
        let newItems = items.filter(i => i.id !== item.id);
        setItems(
            newItems
        );
    }
    function changeItemStatus(item){
        item.status === 'pending'? item.status='completed' :  item.status='pending';
        let otherItems = items.filter(i => i.id !== item.id);
        let newItems = [...otherItems , item];
        setItems(
            newItems
        );
    }
  return (
    <div className="TodoApp">
        <Summary todoItems={items}/>
        <TodoForm onAddTodoItem={addTodoItem}/>
        {/* <AddItem /> */}
        <TodoList todoItems= {items} removeItem={removeTodoItem} changeItemStatus={changeItemStatus}/>
        {/* Task Component inside Todo List */}
    </div>
  );
}

export default TodoApp;
