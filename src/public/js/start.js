// nav
const btns = document.querySelectorAll("#btn_search");

btns.forEach(btn => {
    btn.addEventListener('click', function () {

        btns.forEach(btn => {
            btn.classList.remove('btn_select', 'btn_active');
        });
        this.classList.add('btn_select', 'btn_active');
    });


});

const btn_nav_act = document.getElementById('btn_nav');
const nav = document.getElementById('nav_respon');

btn_nav_act.addEventListener('click', function () {
    if (!btn_nav_act.classList.contains('btn_nav-click')) {
        btn_nav_act.classList.add('btn_nav-click');
        nav.classList.add('nav_respon-active')
        nav.classList.remove('nav_respon-desact');
    }
    else {
        btn_nav_act.classList.remove('btn_nav-click');
        nav.classList.add('nav_respon-desact');
        setTimeout(() => {
            nav.classList.remove('nav_respon-active')
        }, 500);
    }

});

// Carrusel
const btn_ant = document.getElementById('btn-ant');
const btn_sig = document.getElementById('btn-sig');
let slides = document.querySelectorAll('.slide');
let carrusel = document.querySelector('.carrusel_interno');

let contador = 0;
let totalslide = slides.length;

let intervalos
function carruselAuto() {
    intervalos = setInterval(() => {
        if (contador < totalslide - 1) {
            contador++;
        }
        else {
            contador = 0;
        }

        actualizarCarrusel();
    }, 5000);
}

function reinicioCarrusel() {
    if (intervalos) {
        clearInterval(intervalos);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    carruselAuto();
});

function actualizarCarrusel() {
    let desplazamiento = -contador * 100;
    carrusel.style.transform = `translateX(${desplazamiento}%)`;
};

btn_ant.addEventListener('click', () => {
    if (contador > 0) {
        contador--;
    }
    else {
        contador = totalslide - 1;
    }

    actualizarCarrusel();
});

btn_sig.addEventListener('click', () => {
    reinicioCarrusel();
    if (contador < totalslide - 1) {
        contador++;
    }
    else {
        contador = 0;
    }
    actualizarCarrusel();

});

//Historia btn active
const btns_sec_4 = document.querySelectorAll(".boton");
let cards = document.querySelectorAll('.card');

function btn_active(btn) {
    btns_sec_4.forEach(btn => {
        btn.classList.remove('btn_active');
    })
    btn.classList.add('btn_active');
}

function btn_search(btn) {
    let filtro = btn;
    switch (filtro) {
        case 'deportes':
            cards.forEach(card => {
                if (card.id !== 'deporte') {
                    card.classList.add('card_desactive');
                }
                if (card.id === 'deporte') {
                    card.classList.remove('card_desactive');
                }
            })
            break;
        case 'eventos':
            cards.forEach(card => {
                if (card.id !== 'evento') {
                    card.classList.add('card_desactive');
                }
                if (card.id === 'evento') {
                    card.classList.remove('card_desactive');
                }
            })
            break;
        case 'donaciones':
            cards.forEach(card => {
                if (card.id !== 'donacion') {
                    card.classList.add('card_desactive');
                }
                if (card.id === 'donacion') {
                    card.classList.remove('card_desactive');
                }
            })
            break;
        case 'comunidades':
            cards.forEach(card => {
                if (card.id !== 'comunidad') {
                    card.classList.add('card_desactive');
                }
                if (card.id === 'comunidad') {
                    card.classList.remove('card_desactive');
                }
            })
            break;
        default:
            cards.forEach(card => {
                card.classList.remove('card_desactive');
            })

    }
}

btns_sec_4.forEach(btn => {
    btn.addEventListener('click', () => {
        btn_active(btn);
    });
    btn.addEventListener('click', () => {
        btn_search(btn.id)
    });
})

// Desplazamiento
window.addEventListener('scroll', function () {
    function desplazamiento(direccion) {
        let conts = document.querySelectorAll('.posicion_' + direccion);
        for (let x = 0; x < conts.length; x++) {
            let altura = window.innerHeight / 1.2;
            let distancia = conts[x].getBoundingClientRect().top;
            conts[x].classList.add('desplazamiento_' + direccion);
            if (distancia <= altura) {
                conts[x].classList.add('aparece');
            }
            else {
                conts[x].classList.remove('aparece');
            }
        }
    }
    desplazamiento('up');
    desplazamiento('left');
    desplazamiento('right');
})