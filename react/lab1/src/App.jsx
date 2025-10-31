import './App.css'
import Box from '../components/Box'
import Layout from '../components/Layout'
import Equation from '../components/Equation'
import { useState } from 'react'

function App() {
  const [firstNumber, setfirstNumber] = useState(0)
  const [secondNumber, setsecondNumber] = useState(0)
  return (
    <>
      <Layout>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => <Box onClick={() => setfirstNumber(num)} key={num} data={num} />)
        }
      </Layout>
      <Layout>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => <Box onClick={() => setsecondNumber(num)} key={num} data={num} />)
        }
      </Layout>
      <Equation firstNumber={firstNumber} secondNumber={secondNumber} />
    </>
  )
}

export default App
