import api from "./index";

export const getTodos = () => {
    return api.get("/todos")
}

export const createTodo = (text) => {
    return api.post("/todos", {text})
}

export const updateToDo = (id, done) => {
    return api.put(`/todos/${id}`, done )
}

export const removeTodo = (id) => {
    return api.delete(`/todos/${id}`)
}