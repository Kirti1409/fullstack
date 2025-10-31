import { useState } from 'react'
import './App.css'
import { LoginView } from './features/login/views'
import { TodoView } from './features/todo/views'
function App() {
  const [loggedInUser, setloggedInUser] = useState('')

  return (
    <>
      {
        loggedInUser === '' ? <LoginView setloggedInUser={setloggedInUser} /> : <TodoView loggedInUser={loggedInUser} />
      }
    </>
  )
}

export default App
