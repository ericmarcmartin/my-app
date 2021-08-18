import React, { useEffect } from 'react'
import { getTodos } from '../apis/todos';
import { selectTodoIds, addTodos } from '../reducers/todosSlice';
import TodoForm from './TodoForm'
import { useSelector, useDispatch } from "react-redux";
import TodoGroup from './TodoGroup';


function TodoList() {
    const todoIds = useSelector(selectTodoIds);
    const dispatch = useDispatch()

    useEffect(() => {
        getTodos().then((response) => {
            console.log("response.data:", response.data);
            dispatch(addTodos(response.data));
        })
    }, [])

    return (
        <div>
            <TodoGroup />
            <TodoForm className="TodoForm" />
        </div>
    );
};

export default TodoList;