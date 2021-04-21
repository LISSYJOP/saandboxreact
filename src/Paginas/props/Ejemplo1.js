import React from 'react';
function Ejemplo(props){
    return <div>
        <h1 class="txt">EJEMPLO 1</h1>
        <h3 class="UNO">{props.name}</h3>
        <h7 class="DOS">{props.children}</h7>
    </div>

}
function Ejemplo1(){
    return(
        <Ejemplo name="PADRE" children="HIJO"/>
    )
}
export default Ejemplo1; 

