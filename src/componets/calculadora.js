import React from 'react';

export default function SumayRestar() {
 
  const [input, setInput] = React.useState({
    cifra1: "",
    cifra1: "",
  });
  
  const [result, setResult] = React.useState();
  


  const handleInput = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };


 

  const suma = function () {
    setResult((+input.cifra1) + (+input.cifra2));
  };
  

   const multi = function () {
    setResult((+input.cifra1) * (+input.cifra2));
  };
  return (

    <div>
        <div className='sumarMul '>

            <div className='sumaymulti'>
                <h2>Ingresa un numero</h2>
                <div className='caja2'>
                    <input className='cajita2'
                     onChange={handleInput}
                    name="cifra1"
                    value={input.cifra1}
                    type="text"
                    ></input>
                    <input className='cajita2'
                    onChange={handleInput}
                    name="cifra2"
                    value={input.cifra2}
                    type="text"
                    ></input>
                </div>
            </div>
           
            <div className='botones'>
                <button class="boton11" onClick={suma}>sumar</button>
                <button class="boton22" onClick={multi}>multiplicar</button>
                <h3>El resultado es: <span className='resultado'> {result} </span> </h3> 
            </div>
           </div>
    </div>
  );
        
      

}

