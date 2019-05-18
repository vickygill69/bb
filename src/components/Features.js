import React, { Component } from 'react';
const Features = () => {
    return (
        <div class="container text-center">
            <h1 class="display-4 py-4">Vuestra página seria</h1>
            <div class="row">
                <div id="itemRapid" class="col-md-4">
                    <h2>Muy rápida </h2>
                    <p>Con el código optimizado, para facilitar la carga rápida y así Google puede encontrar fácilmente una buena experiencia al usuario.</p>
                </div>
                <div onmouseover="itemResp(this)" onmouseout="unItemResp(this)" id="itemResp" class="col-md-4">
                    <h2>Responsive</h2>
                    <p>Estará bien adaptada a todo tipo de pantallas, incluyendo ordenadores, tablets, smartphones y más.</p>
                </div>
                <div class="col-md-4" id="itemMedida" onmouseover="itemMedida()">
                    <h2>Hecha a medida</h2>
                    <p id="itemMedidaText">No trabajamos con plantillas comerciales, recargadas de funciones innecesarias. Usamos los frameworks comfiables y conocidos como: Bootsrap, React, SaSS, etc que adaptamos a cada negocio.</p>
                </div>
            </div>
        </div>
    )
}
export default Features;