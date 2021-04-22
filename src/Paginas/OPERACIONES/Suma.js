import React, { Component } from 'react';

class SumarNumerosEnteros extends Component {
    constructor(props) {
        super(props)
        this.presion = this.presion.bind(this);
    }

    render() {
        return (
            <div>
                <h1>SUMA DE NUMEROS ENTEROS</h1>
                <form onSubmit={this.presion}>
                    <p>Ingrese Primer Numero:
                        <input type="number" name="numero1"/>
                    </p>
                    <p>Ingrese Segundo Numero:
                        <input type="number" name="numero2"/>
                    </p>
                    <p>
                        <input type="submit" value="sumar"/>
                    </p>
                </form>
            </div>
        );
    }
    presion(e) {
        e.preventDefault();
        const n1=parseInt(e.target.numero1.value, 10);
        const n2=parseInt(e.target.numero2.value, 10);
        const suma=n1+n2;
        alert('El resultado es: ' +suma);
    }
}
export default SumarNumerosEnteros;