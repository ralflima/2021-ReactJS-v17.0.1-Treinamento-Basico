// Importar módulos
import React from 'react';
import ReactDOM from 'react-dom';

// Importar componentes
import Componente01 from './Componente01';
import Componente02 from './Componente02';

// Componente do arquivo index.js
class Principal extends React.Component{
    render(){
        return(
            <div>
                <Componente01 />
                <Componente02 />
            </div>
        );
    }
}

// Render
ReactDOM.render(<Principal />, document.getElementById('root'));

