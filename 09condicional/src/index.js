import React from 'react';
import ReactDOM from 'react-dom';

class Componente extends React.Component{

    // Construtor
    constructor(props){
        super(props);

        this.state={exibir : false};
    }

    // Função
    alterarState = () => {
        let converter = !this.state.exibir;
        this.setState({exibir : converter});
    }

    // Render
    render(){

        // Condicional
        let meuTexto = '';

        if(this.state.exibir == true){
            meuTexto = <h1>Ola!!!! Utilizando condicionais</h1>;
        }else{
            meuTexto = '';
        }

        // Retorno
        return(
            <div>
                {meuTexto}
                <button onClick={this.alterarState}>Clique aqui</button>
            </div>
        )
    }

}

ReactDOM.render(<Componente />, document.getElementById('root'));