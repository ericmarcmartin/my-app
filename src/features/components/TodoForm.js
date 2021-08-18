import React, { useState } from "react";
import { useDispatch } from "react-redux";
import '../../styles/TodoForm.css';
import { AddTodo } from '../reducers/todosSlice';
import { createTodo } from "../apis/todos"
import { Button, Input } from 'antd';

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

    const addTodoItem = () => {
        createTodo(text).then((response) => {
            dispatch(AddTodo(response.data));
        });
        setText("");
    }

    return (
        <div>
           
                <Input size="large" placeholder="Input a new to do item" value={text} onChange={handleChange} className="input-new-item" />
                <Button type="primary" onClick={addTodoItem}  className="add-button">Add</Button>
           
        </div>
    );
}

export default TodoForm;