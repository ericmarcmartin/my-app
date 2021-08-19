import api from "./index";

export const getTodos = () => {
    return api.get("/todos")
}

export const createTodo = (text) => {
    return api.post("/todos", {text})
}

export const updateToDo = (id, update) => {
    return api.put(`/todos/${id}`, update)
}

export const removeTodo = (id) => {
    return api.delete(`/todos/${id}`)
}