import React, { useEffect } from 'react'
import TodoItem from './TodoItem'
import { selectTodoIds } from "../reducers/todosSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTodos } from '../reducers/todosSlice';
import { getTodos } from '../apis/todos';

function TodoGroup() {
    const todoIds = useSelector(selectTodoIds);
    const dispatch = useDispatch()

    useEffect(() => {
        getTodos().then((response) => {
            console.log("response.data:", response.data);
            dispatch(addTodos(response.data));
        })
    })
    return (
        <div>
            {
                todoIds.map((id) => (
                    <TodoItem key={id} itemId={id} />
                ))
            }
        </div>
    );
};

export default TodoGroup;
