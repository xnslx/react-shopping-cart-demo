import React, {useReducer, useState} from 'react';
import './App.css';
import Items from '../src/Component/Items/Items';
import Sumup from './Component/Sumup/Sumup';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
library.add(faShoppingCart);

const initialState = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
  { id: 4, value: 0 }
];

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state.map(item => {
        if (item.id === action.id) {
          return {...item, value: item.value +1}
        }
        return item;
      })
    case "DECREMENT":
        return state.map(item => {
          if (item.id === action.id && item.value > 0) {
            return {...item, value: item.value - 1}
          }
          return item;
        })
    case "DELATE":
      return state.filter(item => item.id !== action.id);
    case "RESET" :
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [setItems] = useState(initialState)

  const changeHandler = e => {
    setItems({value: e.target.value})
  }

  let itemsArray = [];
  const itemsNumHandler = arr => {
    for (let item of arr) {
      if (item.value > 0) {
        itemsArray.push(item);
      }
      if (item.value < 0) {
        itemsArray.pop(item);
      }
    }
    return itemsArray;
  };
  itemsNumHandler(state);

  return (
    <div className="App">
      <Sumup changed={itemsNumHandler} value={itemsArray.length}/>
      <div>
        {state.map(item => (
          <Items
            value={item.value}
            key={item.id}
            changed={changeHandler}
            incHandler={() => dispatch({ type: "INCREMENT", id: item.id })}
            decHandler={() => dispatch({ type: "DECREMENT", id:item.id })}
            delateHandler={() => dispatch({ type: "DELATE", id:item.id })}
          />
        ))}
      </div>
      <button onClick={() => dispatch({type: "RESET"})} style={{marginTop: '40px'}}>Reset</button>
    </div>
  );
}

export default App;
