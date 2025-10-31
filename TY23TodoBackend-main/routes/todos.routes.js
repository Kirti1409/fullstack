const express = require("express");
const Todo = require("../models/Todo");

const router = express.Router();

// ✅ Get all todos
router.get("/", async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Create a new todo
router.post("/", async (req, res) => {
    try {
        const { name, username } = req.body;
        const newTodo = new Todo({ name, username });
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Edit (update) a todo by ID 
router.put("/:id", async (req, res) => {
    try {
        const { name } = req.body;
        const todo = await Todo.findById(req.params.id);

        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        todo.name = name ?? todo.name;

        await todo.save();
        res.json(todo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Delete a todo by ID
router.delete("/:id", async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.json({ message: "Todo deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
