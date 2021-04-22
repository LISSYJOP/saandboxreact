import React, { Component } from 'react';

class Division extends Component {
    constructor(props) {
        super(props);
        this.dividir=this.dividir.bind(this);
        this.state = {
            resultados: []
        }
    }
    render() {
        return (
            <div>
                <h1>DIVISION DE NUMEROS ENTEROS</h1>
                <form onSubmit={this.dividir}>
                <p>Ingrese Primer Numero:
                        <input type="number" name="numero1"/>
                    </p>
                    <p>Ingrese Segundo Numero:
                        <input type="number" name="numero2"/>
                    </p>
                    
                        <input type="submit" value="dividir"/>
                    
                </form>
            </div>
        );
    }
    

    dividir(event) {
        event.preventDefault();
        const n1=parseInt(event.target.numero1.value,10);
        const n2=parseInt(event.target.numero2.value,10);
        const division=n1/n2;
        if((n1>0)&&(n2>0)){ 
        const nuevo = {
            resultado: division,
            numero1: n1,
            numero2: n2
        }

        const vec = this.state.resultados;
        vec.unshift(nuevo);
        this.setState({
            resultados: vec
            
        });

        alert('El resultado es: ' +division);
       }else if((n1==0)||(n2==0)){ 
           alert('Operacion Invalida');
       }
    }


}


export default Division;