import React, { useState } from "react";

function TodoForm (props) {
    const { addTodo } = props;
    const [value, setValue]=useState("");


    const handleSubmit=(event) => {
        event.preventDefault();
        if(!value){
            return;
        }

        addTodo(value);
        setValue("");
    };


    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={value}
                placeholder="Add Todo..."
                onChange={(event) => setValue(event.target.value)}
                
            />
        </form>
    );

}

export default TodoForm;