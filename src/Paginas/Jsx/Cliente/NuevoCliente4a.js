import React, {Component} from 'react';
/* uso de props :
es equivalente a propiedad
en java usamos parametros para trabajar con funciones getters y setters
un props puede tener cualquier tipo de datos 
utilizacion de props en un class bases component

class based component
*/
class nuevoclientev4a extends Component{
    render(){
        return <p class="Ca">Mi nombre es {this.props.nombre}, Soy un Cliente y tengo {this.props.edad} años</p>

    }
}
export default nuevoclientev4a;