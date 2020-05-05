import React from 'react'

const Item = (props) => {
    return (
        <div>
            <input 
                type="text" 
                style={{width: '120px', height: '40px'}}
                value={props.value}
                onChange={props.changed}
            />
            <button onClick={props.incHandler}>+</button>
            <button onClick={props.decHandler}>-</button>
            <button onClick={props.delateHandler}>X</button>
        </div>
    )
};

export default Item;
