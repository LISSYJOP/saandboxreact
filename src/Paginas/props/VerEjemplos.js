import React, {Component} from 'react';
import Ejemplo1 from './Ejemplo1';
import VerEjemplo2 from "./VerEjemplo2";




class verejemplos extends Component{
    render(){
        return(
            <div className="ejemplo2">
               <p class="texto">EJEMPLOS CON PROPS.CHILDREN</p>
               <Ejemplo1/>
               <VerEjemplo2/>
               
           </div> 
        )
    }



}
export default verejemplos;

