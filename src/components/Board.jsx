import React, {useState} from 'react'
import Square from './Square'

function Board(props) {
    return (
        <div className='flex flex-col m-4'>
        <div className="flex flex-row">
            <Square id={0} value={props.squares[0].value} handleClick={() => props.handleClick(0)}/>
            <Square id={1} value={props.squares[1].value} handleClick={() => props.handleClick(1)}/>
            <Square id={2} value={props.squares[2].value} handleClick={() => props.handleClick(2)}/>
        </div>
        <div className="flex flex-row">
            <Square id={3} value={props.squares[3].value} handleClick={() => props.handleClick(3)}/>
            <Square id={4} value={props.squares[4].value} handleClick={() => props.handleClick(4)}/>
            <Square id={5} value={props.squares[5].value} handleClick={() => props.handleClick(5)}/>
        </div>
        <div className="flex flex-row">
            <Square id={6} value={props.squares[6].value} handleClick={() => props.handleClick(6)}/>
            <Square id={7} value={props.squares[7].value} handleClick={() => props.handleClick(7)}/>
            <Square id={8} value={props.squares[8].value} handleClick={() => props.handleClick(8)}/>
        </div>
        </div>  )
}

export default Board