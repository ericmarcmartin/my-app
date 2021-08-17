import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
    ids: ["1"],
    entities: {
        1: {
            id: uuid(),
            text: "testing todos",
            done: false,
        },
    },
});

const todosSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        AddTodo(state, action) {
            console.log("Add Todo: ", action);
            todosAdapter.addOne(state, {
                id: uuid(),
                text: action.payload,
                done: false,
            });
            return state;
        },
        ToggleTodo(state, action) {
            const todo = state.entities[action.payload];
            todo.done = !todo.done;
        }
    },
});

export const { AddTodo, ToggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
export const { selectIds: selectTodoIds, selectById: selectTodoById }
    = todosAdapter.getSelectors((state) => state.todoList);
