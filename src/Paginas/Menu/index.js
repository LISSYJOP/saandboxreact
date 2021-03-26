import React from 'react';
import { Link } from 'react-router-dom';

function Menu(){
    return(
        <div>
            <ul id="menu">
                <li>
                    
                    <Link to="/basicos">01 Basicos</Link>
                    {/*jsx, componentes, props, state, 
                    eventos y metodos, components naming,
                    hooks, stateless, stateful */}
                </li>
                <li>
                    <Link to="/cvida">02 Ciclo de Vida</Link>
                </li>
                <li>
                    <Link to="/rutas">03 Routing</Link>
                </li>                
                <li>
                    <Link to="/rutas">04 Redux</Link>
                </li>                                
                <li>
                    <Link to="/rutas">05 ReduxToolkit</Link>
                </li>                                
                <li>
                    <Link to="/rutas">06 API Fetch: Axios</Link>
                </li>                                    
                <li>
                    <Link to="/rutas">07 API Fetch: ReactQuery</Link>
                </li>                                         
                <li>
                    <Link to="/rutas">08 CRUD Single Entity</Link>
                </li>                                      
                <li>
                    <Link to="/rutas">09 CRUD OneToMany</Link>
                </li>                                  
                <li>
                    <Link to="/rutas">10 Login</Link>
                </li>                         
                <li>
                    <Link to="/rutas">11 ShoppingCart</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu;