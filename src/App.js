import React from 'react';
import Formulario from './components/Formulario';
import MainHeader from './components/MainHeader';
import Clima from './components/Clima';

const App = () => {
  return(
    <div className="container">
        <div className="cabezera">
            <MainHeader titulo='Clima React App' />
        </div>
        <div className="item1">
            <Formulario 
            />
        </div>
        <div className="item2">
          <Clima 
          />
        </div>
    </div>
  )
}

export default App;