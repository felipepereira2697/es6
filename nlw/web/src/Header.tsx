import React from 'react';

interface HeaderProps {
    title: string;
}
//podemos guardar como constantes
//O TIPO DE HEADER SERÁ REACT.FC QUE SIGNIFICA Function component
//um componente escrito em formato de funcao
//esse FC é um generic do Typescript q pode receber um parametro, informando quais propriedades 
//esse cara pode receber

const Header: React.FC<HeaderProps> = (props) => {
    return(
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}

export default Header;