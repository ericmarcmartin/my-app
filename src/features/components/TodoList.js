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
        // <React.Fragment>
        //     <h2 className="todo-header">TodoList</h2>
        //     <div className="todo-container">
        //         {todoIds.map((id) => (
        //             <Todo key={id} id={id} />
        //         ))}
        //     </div>
        //     <TodoForm />
        // </React.Fragment>

        <div>
            <TodoGroup />
            <TodoForm className="TodoForm" />
        </div>
    );
};

export default TodoList;