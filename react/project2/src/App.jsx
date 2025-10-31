import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  // constants
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const equations = ['+', '-', '/', 'x']

  // States
  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const [equation, setEquation] = useState('!')
  const [result, setResult] = useState(0)
  const [isEmpty, setIsEmpty] = useState(false)
  const [isEquationEmpty, setIsEquationEmpty] = useState(false)
  const [isLessThan, setIsLessThan] = useState(false)

  // UseEffects

  useEffect(() => {
    if (firstNumber !== 0 && secondNumber !== 0) {
      setIsEquationEmpty(false)
    } else {
      setIsEquationEmpty(true)
    }
    if (firstNumber < secondNumber) {
      setIsLessThan(true)
    } else {
      setIsLessThan(false)
    }
  }, [firstNumber, secondNumber])

  useEffect(() => {
    if (equation !== '!') {
      setIsEmpty(false)
    } else {
      setIsEmpty(true)
    }
  }, [equation])

  // Actions

  const calculateResult = () => {
    switch (equation) {
      case '+':
        setResult(firstNumber + secondNumber)
        break
      case '-':
        setResult(firstNumber - secondNumber)
        break
      case '/':
        setResult(firstNumber / secondNumber)
        break
      case 'x':
        setResult(firstNumber * secondNumber)
        break
      default:
        setResult(0)
        break
    }
  }

  // Render

  return (
    <>
      <div>
        {
          numbers.map((ele, ind) => {
            return <button key={ind} onClick={() => setFirstNumber(ele)}>{ele}</button>
          })
        }

      </div>
      <div>
        {
          numbers.map((ele, ind) => {
            return <button key={ind} onClick={() => setSecondNumber(ele)}>{ele}</button>
          })
        }
      </div>
      {
        isEquationEmpty ? "" :
          <div>
            {
              equations.map((ele, ind) => {
                return <button key={ind} disabled={
                  isLessThan &&
                  (ele == "-" || ele == "/")
                } onClick={() => setEquation(ele)}>{ele}</button>
              })
            }
          </div>
      }
      {
        isEmpty ? "" : <button disabled={
          isLessThan &&
          (equation == "-" || equation == "/")
        } onClick={calculateResult}>Result</button>
      }
      <div>
        <p>{firstNumber} {equation} {secondNumber} = {result}</p>
      </div>
    </>
  )
}

export default App
