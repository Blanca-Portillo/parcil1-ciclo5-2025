class MiElemento extends HTMLElement {
    constructor() {
        super();
        
        this.attachShadow({ mode: "open" });

        
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
                <img src=" https://th.bing.com/th/id/OIP.mPcvo3uzi-UBZiZEt7wwtQHaEr?rs=1&pid=ImgDetMain  " alt="Mosquito Aedes Aegypti">
                <p>
                    El dengue es una enfermedad viral transmitida por la picadura del mosquito <strong>Aedes aegypti</strong>.
                    Los síntomas incluyen fiebre alta, dolor de cabeza, dolor muscular y articular, y erupciones cutáneas.
                    En casos graves, puede provocar hemorragias y complicaciones mortales.
                </p>
                <h3>Medidas de Prevención</h3>
                <img src=" " alt="Prevención del Dengue">
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


customElements.define("mi-elemento", MiElemento);