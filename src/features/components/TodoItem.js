import React from 'react'
import { selectTodoById } from "../reducers/todosSlice";
import { useSelector } from "react-redux";

function TodoItem(props) {
//    const todo =(state => selectTodoById(statem, props.itemId));
    const todo = useSelector((state) => selectTodoById(state, props.itemId));
    return (
        <div>
            {todo.text}
        </div>
    )
}

export default TodoItem;
