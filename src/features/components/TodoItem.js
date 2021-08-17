import React from 'react'
import { selectTodoById, ToggleTodo } from "../reducers/todosSlice";
import { useSelector, useDispatch } from "react-redux";
import '../../styles/TodoItem.css';
import "../../styles/TodoItem.css"
import { List } from 'antd';

function TodoItem(props) {
    //    const todo =(state => selectTodoById(statem, props.itemId));
    const todo = useSelector((state) => selectTodoById(state, props.itemId));
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(ToggleTodo(props.itemId))
    }

    const todoStatus = todo.done ? "done" : "";

    return (
        <div className={`TodoiItem-todo-${todoStatus}`} onClick={handleClick}>
            <ul>
                <li>{todo.text}<span class="close">&times;</span></li>
            </ul>
        </div>
    )

}

export default TodoItem;
