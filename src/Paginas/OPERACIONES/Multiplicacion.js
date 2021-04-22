import React, { Component } from 'react';

class Multiplicacion extends Component {
    constructor(props) {
        super(props);
        this.multiplicar=this.multiplicar.bind(this);
        this.state = {
            resultados: []
        }
    }
    render() {
        return (
            <div>
                <h1>MULTIPLICACION DE NUMEROS ENTEROS</h1>
                <form onSubmit={this.multiplicar}>
                <p>Ingrese Primer Numero:
                        <input type="number" name="numero1"/>
                    </p>
                    <p>Ingrese Segundo Numero:
                        <input type="number" name="numero2"/>
                    </p>
                    
                        <input type="submit" value="multiplicar"/>
                    
                </form>
            </div>
        );
    }
    

    multiplicar(event) {
        event.preventDefault();
        const n1=parseInt(event.target.numero1.value,10);
        const n2=parseInt(event.target.numero2.value,10);
        const multiplicacion=n1*n2;
        if((n1>0)&&(n2>0)){ 
        const nuevo = {
            resultado: multiplicacion,
            numero1: n1,
            numero2: n2
        }

        const vec = this.state.resultados;
        vec.unshift(nuevo);
        this.setState({
            resultados: vec
            
        });

        alert('El resultado es: ' +multiplicacion);
       }else{ 
           alert('NO ES POSIBLE OPERAR');
       }
    }


}


export default Multiplicacion;