// Importar módulo
import React from 'react';

// Componente
class Tabela extends React.Component{

    // Render
    render(){
        return(
            <table className='table'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.dados.map((elemento, indice) => {
                        return(
                            <tr key={indice}>
                                <td>{elemento.nome}</td>
                                <td>{elemento.idade}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }

}

// Exportar
export default Tabela;