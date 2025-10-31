import { API_BASE_URL } from "@/shared/constants";

export const onFetchAllTodos = async () => {
    try {
        const res = await fetch(`${API_BASE_URL}/todos/`);
        const todos = await res.json();
        return todos;
    } catch (err) {
        console.error("Error fetching todos:", err);
        return [];
    }
}

export const onAddTodo = async (taskName, createdBy) => {
    try {
        const res = await fetch(`${API_BASE_URL}/todos/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: taskName, username: createdBy }),
        });
        const data = await res.json();
        return data;
    } catch (err) {
        console.error("Error adding todo:", err);
    }
}

export const onEditTodo = async (id, updatedTodo) => {
    try {
        const res = await fetch(`${API_BASE_URL}/todos/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: updatedTodo }),
        });
        const data = await res.json();
        return data;
    } catch (err) {
        console.error("Error editing todo:", err);
    }
}

export const onDeleteTodo = async (id) => {
    try {
        const res = await fetch(`${API_BASE_URL}/todos/${id}`, {
            method: "DELETE",
        });
        const data = await res.json();
        return data;
    } catch (err) {
        console.error("Error deleting todo:", err);
    }
}