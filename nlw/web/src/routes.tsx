import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

const Routes =  () => {
    return (
        <BrowserRouter> 
        {/* Passar o path para dizer qual a rota que tenho q passar pra ser acessivel ao usuario */}
        {/* Para garantir que as rotas tenham as comparacoes de exatidao */}
            <Route component={Home} path="/" exact={true}/>
            <Route component={CreatePoint} path="/create-point"/>
        </BrowserRouter>
    )
}

export default Routes;