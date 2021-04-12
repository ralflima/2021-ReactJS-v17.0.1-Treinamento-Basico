// Importar módulos
import React from 'react';
import ReactDOM from 'react-dom';

// Componente
class Componente extends React.Component{

    render(){

        // Vetor
        let cores = ['Azul', 'Amarelo', 'Vermelho'];

        // Listar
        let listar = cores.map((cor, index) => {
            return <li key={index}>{index} - {cor}</li>
        });

        // Retorno
        return(
            <ul>
                {listar}
            </ul>
        );

    }

}

// Render
ReactDOM.render(<Componente />, document.getElementById('root'));