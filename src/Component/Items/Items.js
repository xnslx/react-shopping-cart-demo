import React from 'react'

const Items = (props) => {
    // console.log(props)
    return (
        <div>
            <input type="number" value={props.value} onChange={props.changed}/>
            <button onClick={props.incHandler}>+</button>
            <button onClick={props.decHandler}>-</button>
            <button onClick={props.delateHandler}>X</button>
        </div>
    )
}

export default Items;
