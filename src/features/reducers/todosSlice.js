import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { v4 as uuid } from "uuid";

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState();


const todosSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        AddTodo(state, action) {
            todosAdapter.addOne(state, action.payload);
            return state;
        },
        markTodo(state, action) {
            todosAdapter.updateOne(state, {
                id: action.payload.id,
                changes: !action.payload.done
            })
            const todo = state.entities[action.payload];
            todo.done = !todo.done;
        },
        DeleteTodo(state, action) {
            todosAdapter.removeOne(state, action.payload);
        },
        addTodos(state, action) {
            todosAdapter.addMany(state, action.payload);
        }
    },
});

export const { AddTodo, markTodo, DeleteTodo, addTodos } = todosSlice.actions;
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
    return todos.filter((todo) => todo.done)
});

//Implementation 3
const selectTodoList = (state) => state.todoList.entities;
export const selectDoneLis32 = createSelector([selectTodoList], (todoItems) => {
    return Object.values(todoItems).filter((todo) => todo.done)
});
