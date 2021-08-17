import React from 'react'
import TodoItem from './TodoItem'
import { selectTodoIds } from "../reducers/todosSlice";
import { useSelector } from "react-redux";

function TodoGroup() {
    const todoIds = useSelector(selectTodoIds);
    
    console.log("Group " + todoIds);
    return (
        <div>
            {
               todoIds.map((id) => (
                    <TodoItem key={id} itemId={id}/>
                ))
            }
        </div>
    );
};

export default TodoGroup;
