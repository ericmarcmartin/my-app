import React from 'react'
import { selectTodoById, ToggleTodo, DeleteTodo } from "../reducers/todosSlice";
import { useSelector, useDispatch } from "react-redux";
import '../../styles/TodoItem.css';

function NotFoundPage() {
    return (
        <div className={`PageNotFound`}>
            <ul>
                <h1>Page not found</h1>
            </ul>
        </div>
    )
}

export default NotFoundPage;