import { useEffect, useState } from "react"
import { onLogin, onFetchUsers } from "@/features/login/services"

const LoginView = ({ setloggedInUser }) => {
    const [userName, setuserName] = useState('')
    const [password, setpassword] = useState('')

    useEffect(() => {
        onFetchUsers()
    }, [])

    const handleLogin = async () => {
        try {
            const res = await onLogin(userName, password);
            if (res.status) {
                setloggedInUser(userName)
            } else {
                alert(res.message)
            }
        } catch (err) {
            console.error("Error logging in user:", err);
        }
    }

    return (
        <div>
            <h1>Login to To do list</h1>
            <input
                value={userName}
                onChange={(e) => { setuserName(e.target.value) }}
                type="text"
                placeholder='Username'
            />
            <input
                value={password}
                type="password"
                onChange={(e) => { setpassword(e.target.value) }}
                placeholder='Password'
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export { LoginView }