import { useEffect, useState } from "react"
import { onAddTodo, onFetchAllTodos, onDeleteTodo } from "@/features/todo/services"

const TodoView = ({ loggedInUser }) => {
    const [todos, settodos] = useState([])
    const [taskName, settaskName] = useState('')

    useEffect(() => {
        handleFetchTodos()
    }, [])

    const handleFetchTodos = async () => {
        try {
            const res = await onFetchAllTodos()
            settodos(res)
        } catch (error) {
            console.log("Error fetching todos:", error);
        }
    }

    const handleAddTodo = async () => {
        try {
            const res = await onAddTodo(taskName, loggedInUser)
            console.log("Add Todo Response:", res);
            settaskName('')
            handleFetchTodos()
        } catch (error) {
            console.log("Error adding todo:", error);

        }
    }

    const handleDeleteTodo = async (id) => {
        try {
            const res = await onDeleteTodo(id)
            handleFetchTodos()
        } catch (error) {
            console.log("Error deleting todo:", error);
        }
    }

    return (
        <div>
            <span>Logged in as: {loggedInUser}</span>
            <h1>Todo List</h1>
            <div>
                <input value={taskName} onChange={(e) => settaskName(e.target.value)} type="text" placeholder='New Task' />
                <button onClick={handleAddTodo}>Add Task</button>
            </div>
            <div>
                <ul>
                    {
                        todos.map((todo) => (
                            <li key={todo.id}>{todo.name} (created by {todo.username}) {loggedInUser == todo.username ? <button onClick={() => { handleDeleteTodo(todo._id) }}>Delete</button> : ''}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export { TodoView }