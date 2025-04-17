// Menu mobile
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

// Animação MFRICKS
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.addEventListener("DOMContentLoaded", () => {
    let interval;

    
    const spanElement = document.querySelector("h3 span");

    
    spanElement.dataset.value = spanElement.textContent;

    // Função de animação de texto
    const animateText = () => {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
            spanElement.innerText = spanElement.innerText.split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return spanElement.dataset.value[index];
                    }

                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iteration >= spanElement.dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 90); // Define a velocidade da animação
    };

    // Executa a animação em um loop a cada x segundos
    setInterval(animateText, 5000); 

});