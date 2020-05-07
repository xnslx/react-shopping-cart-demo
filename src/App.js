import React, {useState,useReducer} from 'react';
import './App.css';
import SumUp from './Component/SumUp/SumUp';
import Item from './Component/Item/Item';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
library.add(faShoppingCart);

const initialState = {
  count: 0
};

const reducer = (state,action) => {
  switch(action.type) {
    case 'INCREMENT': 
      return {count: state.count + 1};
    case 'DECREMENT' :
      return { count: state.count - 1};
    case 'DELATE':
      return initialState;
    default:
      return state
  }
}

function App() {
  const [state1, dispatch1] = useReducer(reducer, initialState);
  const [state2, dispatch2] = useReducer(reducer, initialState);
  const [state3, dispatch3] = useReducer(reducer, initialState);
  const [count, setCount] = useState(initialState);
  const [itemNum, setItemNum] = useState(0)

  const changeHandler = e => {
    setCount({count:e.target.value})
    setItemNum({itemNum:1})
  }

  const itemNumHandler = e => {
    setItemNum({itemNum:1})
  }
  return (
    <div>
      <SumUp changed={itemNumHandler} value={itemNum}/>
      <div style={{marginTop: '40px', marginLeft: '40px'}}>
        <Item
          value={state1.count}
          changed={changeHandler}
          incHandler={() => dispatch1({type: 'INCREMENT'})} 
          decHandler={() => dispatch1({type: 'DECREMENT'})} 
          delateHandler={() => dispatch1({type: 'DELATE'})}
        />
        <Item
          value={state2.count}
          changed={changeHandler}
          incHandler={() => dispatch2({type: 'INCREMENT'})} 
          decHandler={() => dispatch2({type: 'DECREMENT'})} 
          delateHandler={() => dispatch2({type: 'DELATE'})}
        />
        <Item
          value={state3.count}
          changed={changeHandler}
          incHandler={() => dispatch3({type: 'INCREMENT'})} 
          decHandler={() => dispatch3({type: 'DECREMENT'})} 
          delateHandler={() => dispatch3({type: 'DELATE'})}
        />
      </div>
    </div>
  );
}

export default App;
