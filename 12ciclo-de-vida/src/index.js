// Importar módulos
import React from 'react';
import ReactDOM from 'react-dom';

// Componente
class MeuComponente extends React.Component{

    // Construtor
    constructor(props){
        super(props);

        this.state = {cor : 'vermelha'};
    }

    // Depois de realizar o render
    componentDidMount(){
        setTimeout(() => {
            this.setState({cor : 'azul'});
        }, 2000);
    }

    // Render    
    render(){
        return <h1>Minha cor preferida é {this.state.cor}</h1>
    }

}

// Render
ReactDOM.render(<MeuComponente />, document.getElementById('root'));