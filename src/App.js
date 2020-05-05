import React from 'react';
import './App.css';
import SumUp from './Component/SumUp/SumUp';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
library.add(faShoppingCart);


function App() {
  return (
    <div>
      <SumUp/>
    </div>
  );
}

export default App;
