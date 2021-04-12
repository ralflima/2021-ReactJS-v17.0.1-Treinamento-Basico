// Importar módulos
import React from 'react';
import ReactDOM from 'react-dom';

// Componente
class Componente extends React.Component{
    render(){
        return <h1>Olá {this.props.nome} você tem {this.props.idade} anos.</h1>;
    }
}

// Variável de idade
let idade = 31;

// Render
ReactDOM.render(<Componente nome="Ralf" idade={idade} />, document.getElementById('root'));
