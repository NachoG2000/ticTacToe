import React from 'react'

function Square(props) {

    let styles = ""
    if(props.id < 3){
        styles = "border-t-0"
    }
    if(props.id === 0 || props.id === 3 || props.id === 6){
        styles += " border-l-0"
    }
    if(props.id === 2 || props.id === 5 || props.id === 8){
        styles += " border-r-0"
    }
    if(props.id > 5){
        styles += " border-b-0"
    }

    return (
        <button className={`border-solid border-[2px] ${styles} border-gray-300 font-bold text-5xl w-20 h-20 focus:outline-none text-[#212227]`}
                onClick={props.handleClick}
        >
            
            {props.value}
        </button>
    )
}

export default Square