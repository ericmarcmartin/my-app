import React from 'react'
import { selectTodoById, ToggleTodo } from "../reducers/todosSlice";
import { useSelector, useDispatch } from "react-redux";

function TodoItem(props) {
    //    const todo =(state => selectTodoById(statem, props.itemId));
    const todo = useSelector((state) => selectTodoById(state, props.itemId));
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(ToggleTodo(props.itemId))
    }
    return (
        <div className="TodoiItem-todo" onClick={handleClick}>
            {todo.text}
        </div>
    )

}

export default TodoItem;
