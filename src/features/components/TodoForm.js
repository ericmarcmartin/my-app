import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from '../reducers/todosSlice';
import { createTodo } from "../apis/todos"
import { Button, Input, notification } from 'antd';
import '../../styles/TodoForm.css';

function TodoForm() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function handleChange(event) {
        setText(event.target.value);
    }

    const addTodoItem = () => {
        createTodo(text).then((response) => {
            dispatch(AddTodo(response.data));
        });

        openNotification();
        setText("");
    }

    const openNotification = () => {
        notification.open({
            message: 'Successfully added message:',
            description: text,
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };

    return (
        <div>
            <Input size="large" placeholder="Input a new to do item" value={text} onChange={handleChange} className="input-new-item" />
            <Button type="primary" onClick={addTodoItem} className="add-button">Add</Button>
        </div>
    );
}

export default TodoForm;