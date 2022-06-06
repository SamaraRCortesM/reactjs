import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Calfc from './componets/Calfc'
import Formulario from './componets/Formulario'
import Calculadora from './componets/Calculadora'
import Layouts from "./componets/Layouts";

 export default function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Layouts/>}>
       <Route path="/Calculadora" element={<Calculadora/>}/>
       <Route path="/Calfc" element={<Calfc/>}/>
       <Route path="/Formulario" element={<Formulario/>}/>

       </Route>
      </Routes>
      </BrowserRouter>
);
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

<React.StrictMode>

<App />

</React.StrictMode>
);


