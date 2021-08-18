import React from 'react'
import {selectDoneList2} from "../reducers/todosSlice";
import { useSelector } from "react-redux";
import '../../styles/TodoItem.css';
// import TodoGroup from './TodoGroup';
// import store from '../../store/store'
import TodoItem from './TodoItem';

function DoneList() {
    const doneTodos = useSelector(selectDoneList2);
    console.log(doneTodos)
    return (
        <div className="container">
            <h1>Done Todo List</h1>
            {
                doneTodos.map((doneTodo) => (
                    <TodoItem key={doneTodo.id} itemId={doneTodo.id} />
                ))
            }
        </div>
    )
    // const todo = useSelector((state) => selectTodoById(state, props.itemId));
    //    const toDoStatus = useSelector(selectDoneList2);

    //    console.log('sample: '+{ toDoStatus});
    // return (

    // <div>
    //     {
    //        toDoStatus.map((status) => (
    //             <TodoItem key={id} itemId={id}/>
    //         ))
    //     }
    // </div>

    // <div className={`DoneList`}>
    //     <ul>
    //         <h1>Done lists:</h1>
    //         <li>{toDoStatus}</li>
    //     </ul>
    // </div>

    //     <div className={`sa`}>

    //     </div>
    // )

}

export default DoneList;