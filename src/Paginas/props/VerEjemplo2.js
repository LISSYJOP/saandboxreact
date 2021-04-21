import React, {Component} from 'react';

import Parent from './Ejemplo2';

class Eje extends Component{
    render(){
        return(
            <div className="ejemplo2">
                <h1 class="hijos"> EJEMPLO 2</h1>
                <Parent>
                    <p class="hijos2">Tania Rosales</p>
                    <p class="hijos2">Luis Rosales</p>
                    <p class="hijos2">Raquel Rosales</p>
                  
                </Parent>
            </div>
        )
    }
}
export default Eje;