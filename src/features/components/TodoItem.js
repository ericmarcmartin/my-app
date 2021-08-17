import React from 'react'
import { selectTodoById, ToggleTodo, DeleteTodo } from "../reducers/todosSlice";
import { useSelector, useDispatch } from "react-redux";
import '../../styles/TodoItem.css';

function TodoItem(props) {
    //    const todo =(state => selectTodoById(statem, props.itemId));
    const todo = useSelector((state) => selectTodoById(state, props.itemId));
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(ToggleTodo(props.itemId))
    }

    function handleDelete(event) {
        dispatch(DeleteTodo(props.itemId));
        event.stopPropagation();
    }

    var todoStatus = todo.done ? "done" : "";

    return (
        <div className={`TodoiItem-todo-${todoStatus}`} onClick={handleClick}>
            <ul>
                <li>{todo.text}<span className="close" onClick={handleDelete}>&times;</span></li>
            </ul>
        </div>
    )

}

export default TodoItem;
