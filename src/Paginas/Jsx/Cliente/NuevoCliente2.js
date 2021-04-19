import React from 'react';
import nuevocliente1 from './NuevoCliente1';
/* 
componente funcional
importar una libreria math utilizando una sintaxis especifica se espera tener una mejor comprension 
del manejo del DOM  */

const nuevocliente2 = () => {
    return <p class="cliente2">Mi nombre es Bruce Wayne, Soy un cliente y tengo {Math.floor(Math.random()*30)} años de edad</p>
}

export default nuevocliente2;