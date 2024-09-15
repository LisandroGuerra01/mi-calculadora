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
toggle.addEventListener('change', (event) => {
    let checked = event.target.checked;
    document.body.classList.add('body-dark-mode');
    document.getElementById('calculadora').classList.add('calculadora-dark-mode');
    document.getElementById('calculadora').classList.remove('calculadora');
    document.getElementById('pantalla').classList.add('pantalla-dark-mode');
    document.getElementById('pantalla').classList.remove('pantalla');
    if (checked) {
        labelToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        labelToggle.style.color = 'rgb(248, 207, 153)';
    } else {
        labelToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        labelToggle.style.color = 'rgb(65, 122, 155)';
        document.body.classList.remove('body-dark-mode');
        document.getElementById('calculadora').classList.add('calculadora');
        document.getElementById('calculadora').classList.remove('calculadora-dark-mode');
        document.getElementById('pantalla').classList.add('pantalla');
        document.getElementById('pantalla').classList.remove('pantalla-dark-mode');
    }
})