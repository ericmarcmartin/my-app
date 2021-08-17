import { configureStore } from "@reduxjs/toolkit"
import todosReducer from "../features/reducers/todosSlice";

const store = configureStore({
    reducer: {
        todoList: todosReducer
    },
});

export default store;
