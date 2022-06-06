import React from "react";

class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            apellidoma: "",
            apellidopa: "",
            celular: "",
            correoelectronico: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    };

    handleSubmit(event) {
        alert('Datos enviados : ' + this.state.value);
        event.preventDefault();
    };

    render() {
        return <>
        <div className="Formulario">
         <h2>Formulario</h2>
          
          <form onSubmit={this.handleSubmit}>
            <label>Nombre<input type="text" value={this.state.value} />
                </label>
            </form>
            <form onSubmit={this.handleSubmit}>
                <label>Apellido Materno:<input type="text" value={this.state.value} />
                </label>
                </form>
             <form onSubmit={this.handleSubmit}>
                <label>Apellido Paterno<input type="text" value={this.state.value} />
                </label>
            </form>
            <form onSubmit={this.handleSubmit}>
                <label>
                   Celular:
                    <input type="text" value={this.state.value} />
                </label>
            </form>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Correo Electrónico:
                    <input type="email" name="email" placeholder="2002018@utrivieramaya.edu.mx" value={this.state.value} />
                </label>
            </form>
            
            <form onSubmit="console.log('You clicked submit.'); return false">
                <button type="submit">Enviar</button>
            </form>
        </div></>
    };
  }

export default Formulario;