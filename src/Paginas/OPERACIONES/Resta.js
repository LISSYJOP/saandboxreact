import React, { Component } from 'react';

class Resta extends Component {
    constructor(props) {
        super(props);
        this.restar=this.restar.bind(this);
        this.state = {
            resultados: []
        }
    }
    render() {
        return (
            <div>
                <h1>RESTA DE NUMEROS ENTEROS</h1>
                <form onSubmit={this.restar}>
                <p>Ingrese Primer Numero:
                        <input type="number" name="numero1"/>
                    </p>
                    <p>Ingrese Segundo Numero:
                        <input type="number" name="numero2"/>
                    </p>
                    
                        <input type="submit" value="restar"/>
                    
                </form>
            </div>
        );
    }

    restar(event) {
        event.preventDefault();
        const n1=parseInt(event.target.numero1.value,10);
        const n2=parseInt(event.target.numero2.value,10);
        const resta=n1-n2;
        const nuevo = {
            resultado: resta,
            numero1: n1,
            numero2: n2
        }
        const vec = this.state.resultados;
        vec.unshift(nuevo);
        this.setState({
            resultados: vec
            
        });
        alert('El resultado es: ' +resta);
        
    }

}
export default Resta;