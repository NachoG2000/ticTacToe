import React, {useState, useEffect} from 'react'
import './App.css'
import Board from './components/Board'

function App() {
  const [squares, setSquares] = useState([
    {value: null, index: 0},
    {value: null, index: 1},
    {value: null, index: 2},
    {value: null, index: 3},
    {value: null, index: 4},
    {value: null, index: 5},
    {value: null, index: 6},
    {value: null, index: 7},
    {value: null, index: 8}
  ]);
  const [isCrossNext, setIsCrossNext] = useState(true)
  const [isGameOver, setIsGameOver] = useState(false)
  const [winner, setWinner] = useState(null)

  useEffect(() => {
    calculateWinner()
  }, [squares])

  function calculateWinner(){
    //horizontal
    if(squares[0].value && (squares[0].value === squares[1].value && squares[0].value === squares[2].value)){
      setIsGameOver(true)
      setWinner(squares[0].value)
    }
    else if(squares[3].value && (squares[3].value === squares[4].value && squares[3].value === squares[5].value)){
      setIsGameOver(true)
      setWinner(squares[3].value)
    }
    else if(squares[6].value && (squares[6].value === squares[7].value && squares[6].value === squares[8].value)){
      setIsGameOver(true)
      setWinner(squares[6].value)
    }
    //vertical
    else if(squares[0].value && (squares[0].value === squares[3].value && squares[0].value === squares[6].value)){
      setIsGameOver(true)
      setWinner(squares[0].value)
    }
    else if(squares[1].value && (squares[1].value === squares[4].value && squares[1].value === squares[7].value)){
      setIsGameOver(true)
      setWinner(squares[1].value)
    }
    else if(squares[2].value && (squares[2].value === squares[5].value && squares[2].value === squares[8].value)){
      setIsGameOver(true)
      setWinner(squares[2].value)
    }
    //diagonal
    else if(squares[0].value && (squares[0].value === squares[4].value && squares[0].value === squares[8].value)){
      setIsGameOver(true)
      setWinner(squares[0].value)
    }
    else if(squares[2].value && (squares[2].value === squares[4].value && squares[2].value === squares[6].value)){
      setIsGameOver(true)
      setWinner(squares[2].value)
    }
    //draw
    else if(!isGameOver && !squares.some(square => square.value === null)){
      setIsGameOver(true)
      setWinner('DRAW')
    }
  }

  function handleClick(i){
      const nextChar = isCrossNext ? 'X' : 'O'
      
      if(squares[i].value === null && !isGameOver){
          setIsCrossNext(prevState => !prevState)
          setSquares(prevSquares => prevSquares.map(square => square.index === i ? {...square, value: nextChar} : square))
      }
  }

  function playAgain(){
    setIsGameOver(false)
    setWinner(null)
    setIsCrossNext(true)
    setSquares([
      {value: null, index: 0},
      {value: null, index: 1},
      {value: null, index: 2},
      {value: null, index: 3},
      {value: null, index: 4},
      {value: null, index: 5},
      {value: null, index: 6},
      {value: null, index: 7},
      {value: null, index: 8}
    ])
  }

  return (
    <main className='flex flex-col xl:w-[30%] sm:w-[40%] w-[95%] my-[2.5%] sm:my-10 mx-auto justify-center items-center bg-[#F5F7FB] p-8 rounded-3xl shadow-2xl'>
      <h1 className='text-4xl font-bold text-[#293264] mb-6'>Tic-Tac-Toe</h1>
      {
        !isGameOver 
        &&
        <div className='flex mb-6'>
          <div className={`border-solid border-[2px] ${isCrossNext ? "border-[#293264]" : "border-gray-300"} px-4 py-2 mr-2 rounded-xl`}>Next: X</div>
          <div className={`border-solid border-[2px] ${isCrossNext ? "border-gray-300" : "border-[#293264]"} px-4 py-2 ml-2 rounded-xl`}>Next: O</div>
        </div>
      }
      <Board squares={squares} handleClick={handleClick}/>
      {
        isGameOver 
        &&
        <div className='text-center'>
          <h2 className='text-6xl font-bold text-[#212227]'>{winner}</h2>
          {
            !(winner === 'DRAW') 
            ?
            <h3 className='text-md font-bold text-[#212227]'>is the winner</h3>
            :
            ""
          }
          <button className="bg-[#4D5B9E] text-white px-4 py-2 mt-8 rounded-lg font-bold"
                  onClick={playAgain}
          >
            Play Again
          </button>
        </div>
      }
    </main>
  )
}

export default App