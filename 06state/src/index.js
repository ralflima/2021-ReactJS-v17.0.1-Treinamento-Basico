// Importar módulos
import React from 'react';
import ReactDOM from 'react-dom';

// Componente
class Componente extends React.Component{

    // Construtor
    constructor(props){
        super(props);

        this.state = {nome:'Ralf'};
    }

    // Render
    render(){
        return <h1>{this.state.nome}</h1>;
    }

}

// Render
ReactDOM.render(<Componente />, document.getElementById('root'));

