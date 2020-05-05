import React, {useReducer} from 'react';
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
  const [state, dispatch] = useReducer(reducer, initialState);

  // const incHandler = (e) => {
    
  // };

  // const decHandler = (e) => {
    
  // };

  // const delateHandler = (e) => {
    
  // };
  return (
    <div>
      <SumUp value={state.count}/>
      <div style={{marginTop: '40px', marginLeft: '40px'}}>
        <Item
          value={state.count}
          incHandler={() => dispatch({type: 'INCREMENT'})} 
          decHandler={() => dispatch({type: 'DECREMENT'})} 
          delateHandler={() => dispatch({type: 'DELATE'})}
        />
        <Item
          incHandler={() => dispatch({type: 'INCREMENT'})} 
          decHandler={() => dispatch({type: 'DECREMENT'})} 
          delateHandler={() => dispatch({type: 'DELATE'})}
        />
        <Item
          incHandler={() => dispatch({type: 'INCREMENT'})} 
          decHandler={() => dispatch({type: 'DECREMENT'})} 
          delateHandler={() => dispatch({type: 'DELATE'})}
        />
        <Item
          incHandler={() => dispatch({type: 'INCREMENT'})} 
          decHandler={() => dispatch({type: 'DECREMENT'})} 
          delateHandler={() => dispatch({type: 'DELATE'})}
        />
      </div>
    </div>
  );
}

export default App;
