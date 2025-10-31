import { API_BASE_URL } from '@/shared/constants';

export const onRegister = async (userName, password) => {
    try {
        const res = await fetch(`${API_BASE_URL}/user/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: userName, password: password }),
        });
        const data = await res.json();
        console.log("Register Response:", data);
    } catch (err) {
        console.error("Error registering user:", err);
    }
}

export const onLogin = async (userName, password) => {
    try {
        const res = await fetch(`${API_BASE_URL}/user/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: userName, password: password }),
        });
        const data = await res.json();
        console.log("Login Response:", data);
        return data;
    } catch (err) {
        console.error("Error logging in user:", err);
        return false;
    }
}

export const onFetchUsers = async () => {
    try {
        const res = await fetch(`${API_BASE_URL}/user/users`);
        const users = await res.json();
        console.log("Users:", users);
    } catch (err) {
        console.error("Error fetching users:", err);
    }
}