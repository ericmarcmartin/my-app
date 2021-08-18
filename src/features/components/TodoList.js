import React, { useEffect } from 'react'
import { getTodos } from '../apis/todos';
import { addTodos } from '../reducers/todosSlice';
import { useDispatch } from "react-redux";
import TodoGroup from './TodoGroup';
import TodoForm from './TodoForm'


function TodoList() {
    const dispatch = useDispatch()

    useEffect(() => {
        getTodos().then((response) => {
            console.log("response.data:", response.data);
            dispatch(addTodos(response.data));
        })
    })

    return (
        <div>
            <TodoGroup />
            <TodoForm className="TodoForm" />
        </div>
    );
};

export default TodoList;