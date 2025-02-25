
class DengueAlerta extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <p>¡Alerta! El dengue es una enfermedad grave. Tome precauciones.</p>
            <button id="cerrar-alerta">Cerrar</button>
        `;
    }

    connectedCallback() {
        this.querySelector('#cerrar-alerta').addEventListener('click', () => {
            this.style.display = 'none';
        });
    }
}

customElements.define('dengue-alerta', DengueAlerta);


window.addEventListener('load', () => {
    alert('Bienvenido a la página sobre el Dengue en El Salvador');
});


document.querySelector('h1').addEventListener('click', () => {
    document.body.style.backgroundColor = '#f0f0f0';
});


const parrafoPrevencion = document.querySelector('#prevencion p');
parrafoPrevencion.addEventListener('mouseover', () => {
    parrafoPrevencion.style.color = '#ff0000'; 
});

parrafoPrevencion.addEventListener('mouseout', () => {
    parrafoPrevencion.style.color = '#000000'; 
});