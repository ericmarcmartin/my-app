import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { v4 as uuid } from "uuid";

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
    ids: ["1"],
    entities: {
        1: {
            id: uuid(),
            text: "First to do item",
            done: false,
        },
    },
});

const todosSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        AddTodo(state, action) {
            // console.log("Add Todo: ", action);
            todosAdapter.addOne(state, action.payload);
            return state;
            //     console.log("Add Todo: ", action);
            //     todosAdapter.addOne(state, {
            //         id: uuid(),
            //         text: action.payload,
            //         done: false,
            //     });
            //     return state;
        },
        markTodo(state, action) {
            const todo = state.entities[action.payload];
            todo.done = !todo.done;
        },
        DeleteTodo(state, action){
            todosAdapter.removeOne(state, action.payload);
            // return state;
        },
        addTodos(state, action){
            todosAdapter.addMany(state, action.payload);
        }
    },
});

export const { AddTodo, markTodo: ToggleTodo, DeleteTodo, addTodos } = todosSlice.actions;
export default todosSlice.reducer;
export const {
    selectAll: selectTodos,
    selectIds: selectTodoIds,
    selectById: selectTodoById
} = todosAdapter.getSelectors((state) => state.todoList);

//Implementation 1
export const selectDoneList = createSelector([selectTodos], (todos) => todos.filter((todo) => todo.done));

//Implementation 2
export const selectDoneList2 = createSelector([selectTodos], (todos) => {
    // console.log("selectTodos: ", selectTodos);
    // console.log("todos: ", todos);
    
    return todos.filter((todo) => todo.done)
    });

//Implementation 3
const selectTodoList = (state) => state.todoList.entities;

export const selectDoneLis32 = createSelector([selectTodoList], (todoItems) => {
    // console.log("selectTodos: ", selectTodos);
    // console.log("todos: ", todoItems);

    return Object.values(todoItems).filter((todo) => todo.done)
    });
