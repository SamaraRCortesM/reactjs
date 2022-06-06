import React from 'react';
import './App.css';

import Calfc from './componets/calfc'
import Formulario from './componets/formulario'
import Calculadora from './componets/calculadora'

 function App() {
  return (
    <div>
       <div className='Calfc'>
        <Calfc/>
      </div> 
       <div className='Formulario'>
        <Formulario />
      </div> 
      <div className='Calculadora'>
        <Calculadora />
      </div> 
    </div>

);
}

export default App;
