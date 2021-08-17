import React, { useState } from "react";
import { useDispatch } from "react-redux";

import '../../styles/TodoForm.css';
import { AddTodo } from '../reducers/todosSlice';

function TodoForm() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function handleChange(event) {
        setText(event.target.value);
    }

    function handlerAdd(event) {
        dispatch(AddTodo(text));
        setText("");
    }
    return (
        <div className="TodoForm">
            <input type="test" placeholder="Input a new todo item"
                value={text} onChange={handleChange} />
            <button onClick={handlerAdd}>Add</button>
        </div>
    );
}

export default TodoForm;