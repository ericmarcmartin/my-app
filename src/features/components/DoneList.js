import React from 'react'
import {selectDoneList2} from "../reducers/todosSlice";
import { useSelector } from "react-redux";
import '../../styles/TodoItem.css';
import TodoItem from './TodoItem';

function DoneList() {
    const doneTodos = useSelector(selectDoneList2);
    return (
        <div>
            <h1>Done Todo List</h1>
            {
                doneTodos.map((doneTodo) => (
                    <TodoItem key={doneTodo.id} itemId={doneTodo.id} />
                ))
            }
        </div>
    )
}

export default DoneList;