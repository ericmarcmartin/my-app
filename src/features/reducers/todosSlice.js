import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
    ids: ["1"],
    entities: {
        1: {
            id: "1",
            text: "testing todos",
            done: false,
        },
    },
});

const todosSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {},
});

export default todosSlice.reducer;
export const {selectIds: selectTodoIds, selectById: selectTodoById }
= todosAdapter.getSelectors((state) => state.todoList);
