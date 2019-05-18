import React, { Component }  from 'react';
import headerImage from "../images/img_group.jpg";
const Header = () => {
    return (
        <div class="container text-center py-4">
            <h1 class="cover-heading py-2">Diseño de Aplicaciones Web Barcelona.</h1>
            <p class="lead">En Sitweb desarrollamos pagias web a medida de las necesidades de crecimiento de tu negocio en internet.</p>
            <p class="lead">
                <a href="#" class="btn btn-lg btn-info">Quiero una pagina!</a>
            </p>
            <img class="w-100" src={headerImage} />
        </div>
    )
}
export default Header;