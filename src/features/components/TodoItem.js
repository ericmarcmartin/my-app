import React from 'react'
import { selectTodoById, ToggleTodo, DeleteTodo } from "../reducers/todosSlice";
import { useSelector, useDispatch } from "react-redux";
import '../../styles/TodoItem.css';
import { updateToDo } from '../apis/todos';

function TodoItem(props) {
    const todo = useSelector((state) => selectTodoById(state, props.itemId));
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(ToggleTodo(props.itemId))
    }

    function onDelete(event) {
        dispatch(DeleteTodo(props.itemId));
        event.stopPropagation();
    }

    const onMark = () => {
        updateToDo(props.itemId, { done: !todo.done }).then(() => {
            dispatch(ToggleTodo(props.itemId));
        });
    };

        // const onMark = () => {
    //     updateToDo(props.itemId, { done: !todo.done }).then((response) => {
    //         dispatch(markTodo(props.itemId, updateToDo:response.data));
    //     });
    // };

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