/*  ejemplo de class based component
siempre debe heredar de la clase component */

import React, {Component} from 'react';
import NuevoCliente1 from './NuevoCliente1';
import NuevoCliente2 from './NuevoCliente2';
import NuevoCliente3 from './NuevoCliente3';
import NuevoCliente4a from './NuevoCliente4a';
import NuevoCliente4b from './NuevoCliente4b';
import VerEjemplos from '../../props/VerEjemplos';
import Props from '../../props/Props';
import EjemploE1 from '../../states/EjemploE1';
import EjemploE2 from '../../states/EjemploE2';
import Suma from '../../OPERACIONES/Suma';
import Resta from '../../OPERACIONES/Resta'
import Multiplicacion from '../../OPERACIONES/Multiplicacion';
import Division from '../../OPERACIONES/Division';
 
class verclientes1 extends Component{
    /*  Algo muy importante, es que en los 
    componentes basados en clases es quesiempre tienen la funcion render
    y dentro de render tienen lafuncion return  */
    render(){
        return(
           <div>
               <p class="texto"></p>
               {/*<NuevoCliente1/>*/}
               {/*<NuevoCliente2/>*/}
               {/*<NuevoCliente3 nombre='Luke SkyWalker' edad='25'/>*/}
               {/*<NuevoCliente4a nombre='Sofia Hernández' edad='17'/>*/}
               {/*<NuevoCliente4b nombre='Katherin Bonilla' edad='30'/>*/}
               {/*<VerEjemplos/>*/}
               <Props/>
               <EjemploE1/>
               <EjemploE2/>
               <Suma/>
               <Resta/>
               <Multiplicacion/>
               <Division/>

             
           </div> 
        )

    }
}

export default verclientes1;