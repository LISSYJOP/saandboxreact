/*  ejemplo de class based component
siempre debe heredar de la clase component */

import React, {Component} from 'react';
import NuevoCliente1 from './NuevoCliente1';
import NuevoCliente2 from './NuevoCliente2';
import NuevoCliente3 from './NuevoCliente3';


class verclientes1 extends Component{
    /*  Algo muy importante, es que en los 
    componentes basados en clases es quesiempre tienen la funcion render
    y dentro de render tienen lafuncion return  */
    render(){
        return(
           <div>
               <p class="texto">Uso de class based components</p>
               <NuevoCliente1/>
               <NuevoCliente2/>
               <NuevoCliente3 nombre='Luke SkyWalker' edad='25'/>
           </div> 
        )

    }
}

export default verclientes1;