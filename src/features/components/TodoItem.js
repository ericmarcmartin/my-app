import React from 'react'
import { selectTodoById, ToggleTodo, DeleteTodo } from "../reducers/todosSlice";
import { useSelector, useDispatch } from "react-redux";
import '../../styles/TodoItem.css';
import { removeTodo, updateToDo } from '../apis/todos';

function TodoItem(props) {
    const todo = useSelector((state) => selectTodoById(state, props.itemId));
    const dispatch = useDispatch();

    function onDelete(event) {
        removeTodo(props.itemId).then((response) => {
        dispatch(DeleteTodo(props.itemId));
        });
        event.stopPropagation();
    }

    const onMark = () => {
        updateToDo(props.itemId, { done: !todo.done }).then(() => {
            dispatch(ToggleTodo(props.itemId));
        });
    };

    const todoStatus = todo.done ? "done" : "";

    return (
        <div className={`TodoiItem-todo-${todoStatus}`} onClick={onMark}>
            <ul>
                <li>{todo.text}<span className="close" onClick={onDelete}>&times;</span></li>
            </ul>
        </div>
    )
}

export default TodoItem;