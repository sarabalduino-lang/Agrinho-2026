let etapa = 0;

const stage = document.getElementById("stage");
const info = document.getElementById("info");
const btn = document.getElementById("transformBtn");
const body = document.body;

btn.addEventListener("click", transformar);

function transformar() {
    etapa++;

    if (etapa === 1) {
        stage.innerHTML = "🫐";
        info.innerHTML = "As frutas são ricas em pigmentos naturais como antocianinas e carotenoides.";
        body.style.background = "linear-gradient(to right, #8360c3, #2ebf91)";
    } 
    else if (etapa === 2) {
        stage.innerHTML = "🖌️";
        info.innerHTML = "Os pigmentos são extraídos e transformados em tinta ecológica.";
        body.style.background = "linear-gradient(to right, #ff9966, #ff5e62)";
    } 
    else if (etapa === 3) {
        stage.innerHTML = "🎨";
        info.innerHTML = "A tinta natural é usada para criar arte sustentável e cheia de significado!";
        body.style.background = "linear-gradient(to right, #00c6ff, #0072ff)";
    } 
    else {
        etapa = 0;
        stage.innerHTML = "🍓";
        info.innerHTML = "Clique no botão para ver a transformação sustentável acontecer!";
        body.style.background = "linear-gradient(to right, #f8ffae, #43c6ac)";
    }
}