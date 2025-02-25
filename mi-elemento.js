class MiElemento extends HTMLElement {
    constructor() {
        super();
        // Crear un shadow DOM
        this.attachShadow({ mode: "open" });

        // Definir el contenido del custom element
        this.shadowRoot.innerHTML = `
            <style>
                div {
                    text-align: center;
                    padding: 20px;
                    background-color: #fff;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    margin: 20px;
                }
                img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 8px;
                    margin: 10px 0;
                }
                h2 {
                    color: #007bff;
                }
                p {
                    font-size: 16px;
                    line-height: 1.6;
                    color: #333;
                }
                ul {
                    text-align: left;
                    display: inline-block;
                    margin: 10px 0;
                }
            </style>
            <div>
                <h2>Información sobre el Dengue</h2>
                <img src="https://www.who.int/images/default-source/imported/dengue-1.tmb-479v.jpg?sfvrsn=1b5e0b0e_2" alt="Mosquito Aedes Aegypti">
                <p>
                    El dengue es una enfermedad viral transmitida por la picadura del mosquito <strong>Aedes aegypti</strong>.
                    Los síntomas incluyen fiebre alta, dolor de cabeza, dolor muscular y articular, y erupciones cutáneas.
                    En casos graves, puede provocar hemorragias y complicaciones mortales.
                </p>
                <h3>Medidas de Prevención</h3>
                <img src="https://www.paho.org/sites/default/files/styles/max_1500x1500/public/2021-06/dengue-prevencion.jpg?itok=5Z5Z5Z5Z" alt="Prevención del Dengue">
                <p>
                    Para prevenir el dengue, es importante:
                    <ul>
                        <li>Eliminar los criaderos de mosquitos (agua estancada).</li>
                        <li>Usar repelente de mosquitos.</li>
                        <li>Colocar mosquiteros en ventanas y puertas.</li>
                        <li>Usar ropa que cubra brazos y piernas.</li>
                    </ul>
                </p>
            </div>
        `;
    }
}

// Registrar el custom element
customElements.define("mi-elemento", MiElemento);