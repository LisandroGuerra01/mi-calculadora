const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error!"
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    })
})

let toggle = document.getElementById('toggle');
let labelToggle = document.getElementById('label-toggle');
let buttons = document.getElementsByClassName('btn');

toggle.addEventListener('change', (event) => {
    let checked = event.target.checked;
    document.body.classList.add('body-dark-mode');
    document.getElementById('calculadora').classList.add('calculadora-dark-mode');
    document.getElementById('calculadora').classList.remove('calculadora');
    document.getElementById('pantalla').classList.add('pantalla-dark-mode');
    document.getElementById('pantalla').classList.remove('pantalla');
    document.getElementById('igual').classList.add('btn-dark-mode');
    document.getElementById('igual').classList.remove('btn');
    if (checked) {
        labelToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        labelToggle.style.color = 'rgb(248, 207, 153)';
        Array.from(buttons).forEach(btn => {
            btn.classList.add('btn-dark-mode');
            btn.classList.remove('btn');
        });
    } else {
        labelToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        labelToggle.style.color = 'rgb(65, 122, 155)';
        document.body.classList.remove('body-dark-mode');
        document.getElementById('calculadora').classList.add('calculadora');
        document.getElementById('calculadora').classList.remove('calculadora-dark-mode');
        document.getElementById('pantalla').classList.add('pantalla');
        document.getElementById('pantalla').classList.remove('pantalla-dark-mode');
        document.getElementById('igual').classList.add('btn');
        document.getElementById('igual').Id.remove('btn-dark-mode');
        Array.from(buttons).forEach(btn => {
            btn.classList.add('btn');
            btn.classList.remove('btn-dark-mode');
        });
    }
})