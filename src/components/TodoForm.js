import React, { useState } from 'react';


function TodoForm(props) {

    const [description, setDescription] = useState("");

    function handleSubmit(e){
        console.log(description);
        if(description === ""){
            return
        }else {
            props.onAddTodoItem({
                description:description,
                status: 'pending'
            })
        }
        setDescription('');
        e.preventDefault();
    }
  return (
    <form onSubmit={handleSubmit}>
        <label>Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="submit" value="Submit" />
    </form>
  );
}

export default TodoForm;