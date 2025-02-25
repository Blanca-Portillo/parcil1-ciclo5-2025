// Evento 1: Cambiar el color de fondo al hacer clic en el botón
document.getElementById("change-color-btn").addEventListener("click", () => {
    const colors = ["#ffcccc", "#ccffcc", "#ccccff", "#ffffcc"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// Evento 2: Cambiar el color del texto al pasar el mouse
document.getElementById("hover-text").addEventListener("mouseover", () => {
    document.getElementById("hover-text").style.color = "#007bff";
});

document.getElementById("hover-text").addEventListener("mouseout", () => {
    document.getElementById("hover-text").style.color = "#333";
});