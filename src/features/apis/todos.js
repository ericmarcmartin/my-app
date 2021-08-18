import api from "./index";

export const getTodos = () => {
    return api.get("/todos")
}

export const createTodo = (text) => {
    return api.post("/todos", {text})
}

export const updateToDo = (id, updateTodo) => {
    return api.put(`/todos/${id}`, {updateTodo} )
}