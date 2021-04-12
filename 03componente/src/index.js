// Importar módulos
import React from 'react';
import ReactDOM from 'react-dom';

// Componente
class MeuComponente extends React.Component{
    render(){
        return <h1>Meu primeiro componente</h1>; 
    }
}

// Render
ReactDOM.render(<MeuComponente />, document.getElementById('root'));