import React from 'react';
/* uso de props :
es equivalente a propiedad
en java usamos parametros para trabajar con funciones getters y setters
un props puede tener cualquier tipo de datos 
utilizacion de props en un class bases component

functional component

*/
const nuevoclientev4b = (props) => {
    return <p class="Cb">Mi nombre es {props.nombre}, Soy un Cliente y tengo {props.edad} años</p>
}
export default nuevoclientev4b;