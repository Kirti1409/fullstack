import { useState } from 'react';
import './App.css';

function App() {
  const boxSize = 700;
  const boxStyles = { border: "1px solid green", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "100px", fontFamily: "cursive", height: `${boxSize / 3}px`, width: `${boxSize / 3}px`, cursor: "pointer" }
  const [currentValue, setcurrentValue] = useState("X")
  const [gameValues, setGameValues] = useState(
    [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]
  )

  const winConditions = [
    // horizontal
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    // vertical 
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    // diagonal
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]],
  ]

  const handleBoxClick = (row, col) => {
    // this is find the column and row index and set the value from the current value state
    setGameValues({ ...gameValues, [row]: { ...gameValues[row], [col]: currentValue } })

    if (currentValue === "X") {
      setcurrentValue("O")
    } else {
      setcurrentValue("X")
    }
  }

  return (
    <>
      <div style={{ height: "95vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ height: `${boxSize}px`, width: `${boxSize}px`, display: "grid", gridTemplateColumns: "auto auto auto" }}>
          <div style={{ ...boxStyles, borderTop: "none", borderLeft: "none" }} onClick={() => handleBoxClick(0, 0)}>{gameValues[0][0]}</div>
          <div style={{ ...boxStyles, borderTop: "none" }} onClick={() => handleBoxClick(0, 1)}>{gameValues[0][1]}</div>
          <div style={{ ...boxStyles, borderTop: "none", borderRight: "none" }} onClick={() => handleBoxClick(0, 2)}>{gameValues[0][2]}</div>
          <div style={{ ...boxStyles, borderLeft: "none" }} onClick={() => handleBoxClick(1, 0)}>{gameValues[1][0]}</div>
          <div style={{ ...boxStyles, }} onClick={() => handleBoxClick(1, 1)}>{gameValues[1][1]}</div>
          <div style={{ ...boxStyles, borderRight: "none" }} onClick={() => handleBoxClick(1, 2)}>{gameValues[1][2]}</div>
          <div style={{ ...boxStyles, borderLeft: "none", borderBottom: "none" }} onClick={() => handleBoxClick(2, 0)}>{gameValues[2][0]}</div>
          <div style={{ ...boxStyles, borderBottom: "none" }} onClick={() => handleBoxClick(2, 1)}>{gameValues[2][1]}</div>
          <div style={{ ...boxStyles, borderBottom: "none", borderRight: "none" }} onClick={() => handleBoxClick(2, 2)}>{gameValues[2][2]}</div>
        </div>
      </div>
    </>
  )
}

export default App
