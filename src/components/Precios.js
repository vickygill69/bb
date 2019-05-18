import React, { Component } from 'react';
const Precios = () => {
    return (
        <div class="container text-center">
            <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 class="display-4">Precios</h1>
                <p class="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
            </div>

            <div class="container">
                <div class="card-deck mb-3 text-center">
                    <div class="card mb-4 shadow-sm">
                        <div class="card-header">
                            <h4 class="my-0 font-weight-normal">Básico</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">499€ </h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>6 apartados</li>
                                <li>Imágenes profesionales</li>
                                <li>Redacción de contenidos</li>
                                <li></li>
                            </ul>
                            <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
                        </div>
                    </div>
                    <div class="card mb-4 shadow-sm">
                        <div class="card-header">
                            <h4 class="my-0 font-weight-normal">Pro</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">$799 </h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>9 apartados</li>
                                <li>Imágenes profesionales</li>
                                <li>Redacción de contenidos</li>
                                <li>Blog</li>
                                <li></li>
                            </ul>
                            <button type="button" class="btn btn-lg btn-block btn-primary">Get started</button>
                        </div>
                    </div>
                    <div class="card mb-4 shadow-sm">
                        <div class="card-header">
                            <h4 class="my-0 font-weight-normal">Full</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">$69 <small class="text-muted">/ mes</small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>12 apartados</li>
                                <li>Imágenes profesionales</li>
                                <li>Redacción de contenidos</li>
                                <li>Blog</li>
                                <li>Estrategia SEO</li>
                            </ul>
                            <button type="button" class="btn btn-lg btn-block btn-primary">Contact us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Precios;