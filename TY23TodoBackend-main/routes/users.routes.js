const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const router = express.Router();

// REGISTER (Create new user)
router.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;

        // check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) return res.status(400).json({ message: "Username already taken" });

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        // check if user exists
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ message: "Invalid username!", status: false });

        // compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Password is incorrect!", status: false });

        res.json({ user, status: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get("/users", async (req, res) => {
    try {
        // fetch all users but exclude password field
        console.log('fetch called');
        const users = await User.find({}, "-password");
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;