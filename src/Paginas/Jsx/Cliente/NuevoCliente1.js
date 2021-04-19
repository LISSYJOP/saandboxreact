/*ejemplo de un componentefuncional (functional component)
normalmente estan definidos utilizando un arrow function*/

import React from 'react';

const nuevocliente1 = () => { /* esto es un arrow function */
    /* segun ecmascrip 6 los elementos pueden definirse de dos maneras
    utilizando el modificador const o el modificador let, en este caso normalmente const = constante
    complementara nuestra funcion nuevo cliente 1  */

    return <p>Mi nombre es Joseph Hernández y soy un cliente</p>;

}
/* este es nuestro primer control o componentefuncional   */
export default nuevocliente1;
 /* se pone default por que pueden haber varias funcionesdentro de un mismo componente */