// Importar módulos
import React from 'react';
import ReactDOM from 'react-dom';

// Componente
class MeuComponente extends React.Component{

    // Função
    minhaFuncao = (elemento) => {
        elemento.preventDefault();
        alert('Testando evento onSubmit');
    }

    // Render    
    render(){
        return(
            <form onSubmit={this.minhaFuncao} action='http://www.ralflima.com'>
                <input type='submit' />
            </form>
        );
    }

}

// Render
ReactDOM.render(<MeuComponente />, document.getElementById('root'));