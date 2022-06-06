import React from 'react';

export default function SumaResta() {
  
  const [input, setInput] = React.useState({
    cifra1: "",
    cifra2: "",
  });
  
  const [result, setResult] = React.useState();


  const handleInput = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };


  //Celsius

  const Celsius = function () {
    setResult(((+input.cant1)-32) * 0.5556+'C');
  };
  
   //Fahrenheit

   const Fahrenheit = function () {
    setResult(((+input.cant1)*1.8) +32 +'F');
  };
  return (

    <div>
        <div className='CelFa '>

            <div className='parte1'>
                <h2>Ingrese temperatura </h2>
                <div className='caja'>
                    <input className='cajita'
                     onChange={handleInput}
                    name="cant1"
                    value={input.cant1}
                    type="text"
                    ></input>
                </div>
                
            </div>
            <h3 className='opc'>Opciones</h3>
          
                <button class="boton1" onClick={Fahrenheit} > Selecciona Fahrenheit</button>
                <button class="boton2"  onClick={Celsius}>Selecciona Celsius</button>
            
            <div className='resultado'> 
                <h4>El resultado es: <span className='result-color'> {result} </span> </h4> 
            </div>
            
        </div>
    </div>
    
  );
         
      

}